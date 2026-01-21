import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Save, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { discountService, CreateDiscountInput } from '@/services/discountService';
import { notificationService } from '@/services/notificationService';
import { storeService } from '@/services/storeService';
import { useDiscount } from '@/hooks/useDiscounts';
import { CATEGORIES } from '@/data/categories';

export default function AdminDiscountForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isEdit = Boolean(id);

  // Fetch Stores for Dropdown
  const { data: stores = [] } = useQuery({
    queryKey: ['stores'],
    queryFn: storeService.getStores
  });

  // Fetch Existing Discount if Edit Mode
  const { data: existingDiscount, isLoading: isLoadingDiscount } = useDiscount(id || '');

  // We strictly use CreateDiscountInput fields for state
  const [formData, setFormData] = useState<CreateDiscountInput>({
    title: '',
    storeId: '',
    description: '',
    startDate: '',
    endDate: '',
    discountType: 'PERCENT',
    discountValue: '',
    pushNotification: false,
  });

  // Populate form when existing data loads
  useEffect(() => {
    if (existingDiscount) {
      const matchedStore = stores.find(s => s.name === existingDiscount.storeName);
      
      setFormData({
        title: existingDiscount.title,
        storeId: matchedStore?.id || '', 
        description: existingDiscount.description,
        startDate: existingDiscount.startDate.split('T')[0],
        endDate: existingDiscount.endDate.split('T')[0],
        discountType: existingDiscount.discountType || 'PERCENT',
        discountValue: existingDiscount.discountValue,
      });
    }
  }, [existingDiscount, stores]);

  const createMutation = useMutation({
    mutationFn: (data: CreateDiscountInput) => discountService.createDiscount(data),
    onSuccess: (_, variables) => {
      toast.success('새 할인이 등록되었습니다.');
      
      if (variables.pushNotification) {
        // Send real push notification to all registered users
        notificationService.sendPushToAll(variables.title, variables.description);
      }

      queryClient.invalidateQueries({ queryKey: ['discounts'] });
      navigate('/admin/discounts');
    },
    onError: (err, variables) => {
       console.error(err);
       toast.error('등록 실패 (DB 권한 문제일 수 있습니다)');

       // For Testing: Trigger notification even if DB fails (e.g. due to RLS)
       if (variables.pushNotification) {
         notificationService.sendTestNotification(
           `[TEST] ${variables.title}`, 
           `${variables.description} (DB 저장 실패, 알림 테스트만 수행)`
         );
       }
    }
  });

  const updateMutation = useMutation({
    mutationFn: (data: Partial<CreateDiscountInput>) => discountService.updateDiscount(id!, data),
    onSuccess: () => {
      toast.success('할인 정보가 수정되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['discounts'] });
      queryClient.invalidateQueries({ queryKey: ['discount', id] });
      navigate('/admin/discounts');
    },
    onError: (err) => {
       console.error(err);
       toast.error('수정 실패');
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.storeId) {
        toast.error('매장을 선택해주세요.');
        return;
    }

    if (isEdit) {
      updateMutation.mutate(formData);
    } else {
      createMutation.mutate(formData);
    }
  };

  const updateField = (field: keyof CreateDiscountInput, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const selectedStore = stores.find(s => s.id === formData.storeId);
  // Find category name from categoryId (e.g. 'mart' -> '마트')
  const categoryName = selectedStore 
    ? CATEGORIES.find(c => c.id === selectedStore.category.toLowerCase())?.name || selectedStore.category
    : '-';

  if (isEdit && isLoadingDiscount) {
      return <div className="flex justify-center p-10"><Loader2 className="animate-spin" /></div>;
  }

  return (
    <div className="max-w-2xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-h2">{isEdit ? '할인 수정' : '할인 등록'}</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 기본 정보 */}
        <Card>
          <CardHeader>
            <CardTitle>기본 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="space-y-2">
              <Label htmlFor="storeId">매장 선택 *</Label>
              <Select value={formData.storeId} onValueChange={(v) => updateField('storeId', v)}>
                <SelectTrigger>
                  <SelectValue placeholder="매장 선택" />
                </SelectTrigger>
                <SelectContent>
                  {stores.map((store) => (
                    <SelectItem key={store.id} value={store.id}>
                      {store.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
               <p className="text-xs text-muted-foreground">
                  * 카테고리: <span className="font-medium text-foreground">{categoryName}</span> (매장 정보에 따름)
               </p>
            </div>
          
            <div className="space-y-2">
              <Label htmlFor="title">할인명 *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => updateField('title', e.target.value)}
                placeholder="예: 신선식품 30% 할인"
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* 기간 */}
        <Card>
          <CardHeader>
            <CardTitle>기간</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">시작일 *</Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => updateField('startDate', e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">종료일 *</Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => updateField('endDate', e.target.value)}
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* 혜택 */}
        <Card>
          <CardHeader>
            <CardTitle>혜택 내용</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="discountValue">할인율/가격 *</Label>
              <Input
                id="discountValue"
                value={formData.discountValue}
                onChange={(e) => updateField('discountValue', e.target.value)}
                placeholder="예: 30%, 5000"
                required
              />
            </div>
             <div className="space-y-2">
              <Label htmlFor="discountType">할인 유형</Label>
               <Select value={formData.discountType} onValueChange={(v) => updateField('discountType', v)}>
                <SelectTrigger>
                  <SelectValue placeholder="유형 선택" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="PERCENT">정률(%)</SelectItem>
                    <SelectItem value="AMOUNT">정액(원)</SelectItem>
                    <SelectItem value="BOGO">1+1</SelectItem>
                </SelectContent>
              </Select>
            </div>
  
            <div className="space-y-2">
              <Label htmlFor="description">상세 설명</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => updateField('description', e.target.value)}
                placeholder="할인에 대한 상세 설명"
                rows={4}
              />
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <Checkbox 
                id="pushNotification" 
                checked={formData.pushNotification}
                onCheckedChange={async (checked) => {
                  const nextValue = checked === true;
                  if (nextValue && "Notification" in window && Notification.permission === "default") {
                    try {
                      await Notification.requestPermission();
                    } catch (error) {
                      console.error('Error requesting notification permission:', error);
                    }
                  }
                  setFormData(prev => ({ ...prev, pushNotification: nextValue }));
                }}
              />
              <Label htmlFor="pushNotification" className="cursor-pointer">
                할인 등록 시 알림 발송 (테스트용)
              </Label>
            </div>
          </CardContent>
        </Card>

        {/* Submit */}
        <div className="flex gap-3">
          <Button type="button" variant="outline" onClick={() => navigate(-1)}>
            취소
          </Button>
          <Button type="submit" disabled={createMutation.isPending || updateMutation.isPending}>
            <Save className="w-4 h-4 mr-2" />
            {createMutation.isPending || updateMutation.isPending ? '저장 중...' : (isEdit ? '수정하기' : '등록하기')}
          </Button>
        </div>
      </form>
    </div>
  );
}
