import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import { DashboardLayout } from './components/DashboardLayout';
import { Login } from './pages/Login';
import { I18nProvider } from './i18n/I18nProvider';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { CorporateInsight } from './pages/CorporateInsight';
import { ChurnOverview } from './pages/ChurnOverview';
import { ChurnRanking } from './pages/ChurnRanking';
import { CpiMatrix } from './pages/CpiMatrix';
import { ProfitabilityOverview } from './pages/ProfitabilityOverview';
import { ProfitabilityList } from './pages/ProfitabilityList';
import { ProfitabilityModelPerformance } from './pages/ProfitabilityModelPerformance';
import { ChurnModelPerformance } from './pages/ChurnModelPerformance';
import { SegmentationOverview } from './pages/SegmentationOverview';
import { SegmentationCharacteristics } from './pages/SegmentationCharacteristics';
import { SegmentationProductUsage } from './pages/SegmentationProductUsage';
import { SegmentationModelPerformance } from './pages/SegmentationModelPerformance';
import { RoleManagement } from './pages/RoleManagement';
import { UserManagement } from './pages/UserManagement';
import { ChangePassword } from './pages/ChangePassword';
import { MenuManagement } from './pages/MenuManagement';
import { EditProfile } from './pages/EditProfile';
import { SystemParameter } from './pages/SystemParameter';
import { Toaster } from './components/ui/sonner';

// Simple auth guard
function RequireAuth({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem('auth_token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

const router = createBrowserRouter([
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/',
    element: (
      <RequireAuth>
        <DashboardLayout />
      </RequireAuth>
    ),
    children: [
      // Redirect root to Corporate Insight
      { index: true, element: <Navigate to="/corporate-insight" replace /> },

      // 1. Corporate Insight (no sub-menu, direct page)
      { path: 'corporate-insight', element: <CorporateInsight /> },
      { path: 'corporate-insight/overview', element: <CorporateInsight /> },

      // 2. Churn Analysis
      { path: 'churn/overview', element: <ChurnOverview /> },
      { path: 'churn/ranking', element: <ChurnRanking /> },
      { path: 'churn/model-performance', element: <ChurnModelPerformance /> },

      // 3. Customer Profitability
      { path: 'profitability/overview', element: <ProfitabilityOverview /> },
      { path: 'profitability/list', element: <ProfitabilityList /> },
      { path: 'profitability/model-performance', element: <ProfitabilityModelPerformance /> },

      // 4. Customer Segmentation
      { path: 'segmentation/overview', element: <SegmentationOverview /> },
      { path: 'segmentation/characteristics', element: <SegmentationCharacteristics /> },
      { path: 'segmentation/product-usage', element: <SegmentationProductUsage /> },
      { path: 'segmentation/model-performance', element: <SegmentationModelPerformance /> },

      // 5. CPI Matrix
      { path: 'cpi-matrix/overview', element: <CpiMatrix /> },
      { path: 'cpi-matrix/hot-target', element: <PlaceholderPage menuKey="menu_cpi_02" /> },

      // 6. Recommender System
      { path: 'recommender/recommendations', element: <PlaceholderPage menuKey="menu_rs_01" /> },
      { path: 'recommender/model-performance', element: <PlaceholderPage menuKey="menu_rs_02" /> },

      // 7. Campaign & Strategy Tracking
      { path: 'campaign/registry', element: <PlaceholderPage menuKey="menu_cam_01" /> },
      { path: 'campaign/assignment', element: <PlaceholderPage menuKey="menu_cam_02" /> },
      { path: 'campaign/effectiveness', element: <PlaceholderPage menuKey="menu_cam_03" /> },

      // 8. Customer 360
      { path: 'customer-360/profile', element: <PlaceholderPage menuKey="menu_c360_01" /> },

      // 9. Alert / Notification Center
      { path: 'alerts/center', element: <PlaceholderPage menuKey="menu_not_01" /> },

      // 10. Setup
      { path: 'setup/threshold-churn', element: <PlaceholderPage menuKey="menu_set_01" /> },
      { path: 'setup/threshold-profitability', element: <PlaceholderPage menuKey="menu_set_02" /> },
      { path: 'setup/recommendation-settings', element: <PlaceholderPage menuKey="menu_set_03" /> },
      { path: 'setup/user-role-management', element: <UserManagement /> },
      { path: 'setup/observation-settings', element: <PlaceholderPage menuKey="menu_set_05" /> },
      { path: 'setup/notification-rules', element: <PlaceholderPage menuKey="menu_set_06" /> },
      { path: 'setup/persona-labels', element: <PlaceholderPage menuKey="menu_set_07" /> },

      // 11. System
      { path: 'system/profile', element: <EditProfile /> },
      { path: 'system/help-glossary', element: <PlaceholderPage menuKey="menu_sys_02" /> },

      // Legacy routes (keep role/menu management accessible)
      { path: 'settings/role-management', element: <RoleManagement /> },
      { path: 'settings/menu-management', element: <MenuManagement /> },
      { path: 'settings/change-password', element: <ChangePassword /> },
      { path: 'settings/system-parameters', element: <SystemParameter /> },

      // Catch-all → redirect to Corporate Insight
      { path: '*', element: <Navigate to="/corporate-insight" replace /> },
    ],
  },
]);

export default function App() {
  return (
    <I18nProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </I18nProvider>
  );
}
