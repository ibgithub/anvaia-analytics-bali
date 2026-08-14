import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import { DashboardLayout } from './components/DashboardLayout';
import { Login } from './pages/Login';
import { I18nProvider } from './i18n/I18nProvider';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { ExecutivePortfolio } from './pages/ExecutivePortfolio';
import { ExecutiveDashboard } from './pages/ExecutiveDashboard';
import { ClusterMap } from './pages/ClusterMap';
import { ChurnWatchlist } from './pages/ChurnWatchlist';
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
      // Redirect root to executive dashboard
      { index: true, element: <Navigate to="/executive/demographics" replace /> },

      // M1: Executive Dashboard
      { path: 'executive/portfolio', element: <ExecutivePortfolio /> },
      { path: 'executive/churn-distribution', element: <PlaceholderPage menuKey="menu_m1_2" /> },
      { path: 'executive/segmentation-summary', element: <PlaceholderPage menuKey="menu_m1_3" /> },
      { path: 'executive/top-products', element: <PlaceholderPage menuKey="menu_m1_4" /> },
      { path: 'executive/priority-alerts', element: <PlaceholderPage menuKey="menu_m1_5" /> },
      { path: 'executive/demographics', element: <ExecutiveDashboard /> },

      // M2: Customer Segmentation
      { path: 'segmentation/cluster-map', element: <ClusterMap /> },
      { path: 'segmentation/persona', element: <PlaceholderPage menuKey="menu_m2_2" /> },
      { path: 'segmentation/characteristics', element: <PlaceholderPage menuKey="menu_m2_3" /> },
      { path: 'segmentation/member-list', element: <PlaceholderPage menuKey="menu_m2_4" /> },
      { path: 'segmentation/migration-trend', element: <PlaceholderPage menuKey="menu_m2_5" /> },

      // M3: Churn Prediction
      { path: 'churn/watchlist', element: <ChurnWatchlist /> },
      { path: 'churn/score-distribution', element: <PlaceholderPage menuKey="menu_m3_2" /> },
      { path: 'churn/worsening-score', element: <PlaceholderPage menuKey="menu_m3_3" /> },
      { path: 'churn/driver-detail', element: <PlaceholderPage menuKey="menu_m3_4" /> },
      { path: 'churn/action-history', element: <PlaceholderPage menuKey="menu_m3_5" /> },

      // M4: Customer Profitability
      { path: 'profitability/ranking', element: <PlaceholderPage menuKey="menu_m4_1" /> },
      { path: 'profitability/priority-matrix', element: <PlaceholderPage menuKey="menu_m4_2" /> },
      { path: 'profitability/persona-group', element: <PlaceholderPage menuKey="menu_m4_3" /> },
      { path: 'profitability/breakdown', element: <PlaceholderPage menuKey="menu_m4_4" /> },
      { path: 'profitability/trend', element: <PlaceholderPage menuKey="menu_m4_5" /> },
      { path: 'profitability/clv', element: <PlaceholderPage menuKey="menu_m4_6" /> },

      // M5: Product Recommendation
      { path: 'recommendation/list', element: <PlaceholderPage menuKey="menu_m5_1" /> },
      { path: 'recommendation/status', element: <PlaceholderPage menuKey="menu_m5_2" /> },
      { path: 'recommendation/cold-start', element: <PlaceholderPage menuKey="menu_m5_3" /> },
      { path: 'recommendation/performance', element: <PlaceholderPage menuKey="menu_m5_4" /> },
      { path: 'recommendation/product-config', element: <PlaceholderPage menuKey="menu_m5_5" /> },

      // M6: Customer Profile
      { path: 'customer-profile/overview', element: <PlaceholderPage menuKey="menu_m6_1" /> },
      { path: 'customer-profile/cluster-persona', element: <PlaceholderPage menuKey="menu_m6_2" /> },
      { path: 'customer-profile/churn-score', element: <PlaceholderPage menuKey="menu_m6_3" /> },
      { path: 'customer-profile/profitability-clv', element: <PlaceholderPage menuKey="menu_m6_4" /> },
      { path: 'customer-profile/retention-priority', element: <PlaceholderPage menuKey="menu_m6_5" /> },
      { path: 'customer-profile/active-recommendations', element: <PlaceholderPage menuKey="menu_m6_6" /> },
      { path: 'customer-profile/credit-score', element: <PlaceholderPage menuKey="menu_m6_7" /> },
      { path: 'customer-profile/rm-interaction', element: <PlaceholderPage menuKey="menu_m6_8" /> },

      // M7: Reports & Analytics
      { path: 'reports/segmentation', element: <PlaceholderPage menuKey="menu_m7_1" /> },
      { path: 'reports/churn-retention', element: <PlaceholderPage menuKey="menu_m7_2" /> },
      { path: 'reports/profitability', element: <PlaceholderPage menuKey="menu_m7_3" /> },
      { path: 'reports/recommendation-effectiveness', element: <PlaceholderPage menuKey="menu_m7_4" /> },
      { path: 'reports/export', element: <PlaceholderPage menuKey="menu_m7_5" /> },

      // M8: System Settings
      { path: 'settings/model-parameters', element: <PlaceholderPage menuKey="menu_m8_1" /> },
      { path: 'settings/batch-processing', element: <PlaceholderPage menuKey="menu_m8_2" /> },
      { path: 'settings/product-config', element: <PlaceholderPage menuKey="menu_m8_3" /> },
      { path: 'settings/user-management', element: <UserManagement /> },
      { path: 'settings/role-management', element: <RoleManagement /> },
      { path: 'settings/menu-management', element: <MenuManagement /> },
      { path: 'settings/change-password', element: <ChangePassword /> },
      { path: 'settings/integration-monitoring', element: <PlaceholderPage menuKey="menu_m8_8" /> },
      { path: 'settings/audit-log', element: <PlaceholderPage menuKey="menu_m8_9" /> },
      { path: 'settings/edit-profile', element: <EditProfile /> },
      { path: 'settings/system-parameters', element: <SystemParameter /> },

      // Catch-all
      { path: '*', element: <Navigate to="/executive/portfolio" replace /> },
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
