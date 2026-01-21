import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MapPage from "./pages/app/MapPage";
import CalendarPage from "./pages/app/CalendarPage";
import CategoriesPage from "./pages/app/CategoriesPage";
import SettingsPage from "./pages/app/SettingsPage";
import DiscountDetailPage from "./pages/app/DiscountDetailPage";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDiscounts from "./pages/admin/AdminDiscounts";
import AdminDiscountForm from "./pages/admin/AdminDiscountForm";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* 사용자 앱 */}
          <Route path="/app" element={<MapPage />} />
          <Route path="/app/calendar" element={<CalendarPage />} />
          <Route path="/app/categories" element={<CategoriesPage />} />
          <Route path="/app/settings" element={<SettingsPage />} />
          <Route path="/app/discount/:id" element={<DiscountDetailPage />} />
          
          {/* 관리자 */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/discounts" replace />} />
            <Route path="discounts" element={<AdminDiscounts />} />
            <Route path="discounts/new" element={<AdminDiscountForm />} />
            <Route path="discounts/:id/edit" element={<AdminDiscountForm />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
