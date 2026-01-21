import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Tag, Settings } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary text-primary-foreground mx-auto mb-6">
          <MapPin className="w-10 h-10" />
        </div>

        {/* Title */}
        <h1 className="text-h1 mb-2">내 주변 할인</h1>
        <p className="text-muted-foreground mb-8">
          주변의 모든 할인 정보를 한눈에!<br />
          지도와 캘린더로 쉽게 확인하세요.
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-card border">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">지도로 탐색</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-card border">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">캘린더 확인</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-card border">
            <Tag className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">카테고리별</span>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-card border">
            <Settings className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">맞춤 알림</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <Button asChild className="w-full" size="lg">
            <Link to="/app">시작하기</Link>
          </Button>
          <Button asChild variant="outline" className="w-full" size="lg">
            <Link to="/admin">관리자 페이지</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
