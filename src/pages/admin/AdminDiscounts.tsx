import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategoryName } from '@/data/categories';
import { getDiscountStatus } from '@/types/discount';
import { Button } from '@/components/ui/button';
import { SearchBar } from '@/components/common/SearchBar';
import { StatusBadge } from '@/components/common/StatusBadge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Pencil, Trash2, Loader2, RefreshCw } from 'lucide-react';
import { format } from 'date-fns';
import { useDiscounts } from '@/hooks/useDiscounts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { discountService } from '@/services/discountService';
import { toast } from 'sonner';

export default function AdminDiscounts() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState('');
  
  const { data: discounts = [], isLoading, refetch } = useDiscounts();

  const deleteMutation = useMutation({
    mutationFn: (id: string) => discountService.deleteDiscount(id),
    onSuccess: () => {
      toast.success('할인이 삭제되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['discounts'] });
    },
    onError: (error) => {
      console.error(error);
      toast.error('삭제에 실패했습니다.');
    }
  });

  const filteredDiscounts = discounts.filter(
    (d) =>
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.storeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async (id: string) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      deleteMutation.mutate(id);
    }
  };

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 justify-between">
        <SearchBar
          placeholder="할인명, 매장명 검색"
          value={searchQuery}
          onChange={setSearchQuery}
          className="sm:max-w-xs"
        />
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => refetch()}>
             <RefreshCw className="w-4 h-4" />
          </Button>
          <Button onClick={() => navigate('/admin/discounts/new')}>
            <Plus className="w-4 h-4 mr-2" />
            할인 등록
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border bg-card overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>상태</TableHead>
              <TableHead>할인명</TableHead>
              <TableHead>매장명</TableHead>
              <TableHead>카테고리</TableHead>
              <TableHead>기간</TableHead>
              <TableHead className="text-right">액션</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  <Loader2 className="w-6 h-6 animate-spin mx-auto text-primary" />
                </TableCell>
              </TableRow>
            ) : filteredDiscounts.length === 0 ? (
               <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  데이터가 없습니다.
                </TableCell>
              </TableRow>
            ) : (
              filteredDiscounts.map((discount) => {
                const status = getDiscountStatus(discount);
                return (
                  <TableRow key={discount.id}>
                    <TableCell>
                      <StatusBadge
                        variant={
                          status === 'active' ? 'active' : status === 'upcoming' ? 'upcoming' : 'ended'
                        }
                      >
                        {status === 'active' ? '진행중' : status === 'upcoming' ? '예정' : '종료'}
                      </StatusBadge>
                    </TableCell>
                    <TableCell className="font-medium">{discount.title}</TableCell>
                    <TableCell>{discount.storeName}</TableCell>
                    <TableCell>{getCategoryName(discount.categoryId)}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {format(new Date(discount.startDate), 'M.d')} -{' '}
                      {format(new Date(discount.endDate), 'M.d')}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => navigate(`/admin/discounts/${discount.id}/edit`)}
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(discount.id)}
                          disabled={deleteMutation.isPending}
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
