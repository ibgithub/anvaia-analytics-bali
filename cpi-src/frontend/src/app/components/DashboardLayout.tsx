import { useState, useMemo } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router';
import {
  LayoutDashboard,
  Users,
  TrendingDown,
  DollarSign,
  ShoppingBag,
  UserCircle,
  BarChart3,
  Settings,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  LogOut,
  FileText,
  type LucideIcon,
} from 'lucide-react';
import { useI18n } from '../i18n';

// Logo placeholder
const logoImage = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="8" fill="#155DFC"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="bold" fill="white">A</text></svg>');

// Map icon string from API to Lucide component
const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  Users,
  TrendingDown,
  DollarSign,
  ShoppingBag,
  UserCircle,
  BarChart3,
  Settings,
  FileText,
};

function getIcon(iconName: string | null): LucideIcon {
  if (!iconName) return FileText;
  return iconMap[iconName] || FileText;
}

// Types matching API response
interface ApiMenu {
  id: number;
  code: string;
  parentCode: string | null;
  menuKey: string;
  path: string;
  icon: string | null;
  sortOrder: number;
  children: ApiMenu[] | null;
}

interface DisplayMenu {
  key: string;
  code: string;
  icon: LucideIcon;
  path: string;
  children: { key: string; path: string }[];
}

// Convert API menu response to display format
function buildMenuFromApi(apiMenus: ApiMenu[]): DisplayMenu[] {
  return apiMenus
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((menu) => ({
      key: menu.menuKey,
      code: menu.code,
      icon: getIcon(menu.icon),
      path: menu.path,
      children: (menu.children || [])
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((child) => ({
          key: child.menuKey,
          path: child.path,
        })),
    }));
}

export function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, t, setLang } = useI18n();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  // Load menu from localStorage (saved after login)
  const menuStructure = useMemo<DisplayMenu[]>(() => {
    try {
      const stored = localStorage.getItem('auth_menus');
      if (stored) {
        const apiMenus: ApiMenu[] = JSON.parse(stored);
        const menus = buildMenuFromApi(apiMenus);
        return menus;
      }
    } catch (e) {
      // fallback: empty
    }
    return [];
  }, []);

  // Auto-expand first menu if none expanded
  const effectiveExpanded = expandedMenu ?? (menuStructure.length > 0 ? menuStructure[0].key : null);

  function toggleMenu(key: string) {
    setExpandedMenu((prev) => (prev === key ? null : key));
  }

  function handleLogout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    localStorage.removeItem('auth_menus');
    navigate('/login', { replace: true });
  }

  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar — dark navy */}
      <aside className={`${isCollapsed ? 'w-20' : 'w-72'} bg-[#0f172a] overflow-y-auto transition-all duration-300`}>
        {/* Header */}
        <div className="p-4 border-b border-slate-700/50">
          <div className="flex items-center justify-between">
            {isCollapsed ? (
              <div className="w-full">
                <img src={logoImage} alt="Logo" className="w-10 h-10 mx-auto" />
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <img src={logoImage} alt="Logo" className="w-10 h-10" />
                <div>
                  <h1 className="text-lg font-bold text-white">{t.appName}</h1>
                  <p className="text-xs text-slate-400">{t.appTagline}</p>
                </div>
              </div>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-700 transition-colors"
            >
              {isCollapsed ? <X className="w-5 h-5 text-slate-300" /> : <Menu className="w-5 h-5 text-slate-300" />}
            </button>
          </div>
        </div>

        {/* Language switcher — above menu */}
        <div className="px-3 pt-3 pb-1 flex items-center gap-2">
          <button
            onClick={() => setLang('id')}
            className={`px-2 py-1 rounded-md transition-all ${lang === 'id' ? 'bg-slate-700' : 'hover:bg-slate-800'}`}
            title="Bahasa Indonesia"
          >
            <svg width="24" height="16" viewBox="0 0 24 16" className="rounded-sm">
              <rect width="24" height="8" fill="#FF0000"/>
              <rect y="8" width="24" height="8" fill="#FFFFFF"/>
            </svg>
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-2 py-1 rounded-md transition-all ${lang === 'en' ? 'bg-slate-700' : 'hover:bg-slate-800'}`}
            title="English"
          >
            <svg width="24" height="16" viewBox="0 0 60 30" className="rounded-sm">
              <clipPath id="t"><rect width="60" height="30"/></clipPath>
              <g clipPath="url(#t)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#t)"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
              </g>
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-3">
          <div className="space-y-1">
            {menuStructure.map((menu) => {
              const Icon = menu.icon;
              const isExpanded = effectiveExpanded === menu.key;
              const isActive = isExpanded;
              const label = (t as any)[menu.key] || menu.key;

              return (
                <div key={menu.key}>
                  {/* Parent menu */}
                  <button
                    onClick={() => {
                      if (isCollapsed) {
                        setIsCollapsed(false);
                        setExpandedMenu(menu.key);
                      } else {
                        toggleMenu(menu.key);
                      }
                    }}
                    className={`
                      w-full flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'} px-3 py-2 rounded-lg transition-all text-[13px]
                      ${isActive
                        ? 'border border-blue-500 text-blue-400 font-semibold bg-blue-500/10'
                        : 'border border-transparent text-slate-300 hover:bg-slate-800 hover:text-white'
                      }
                    `}
                    title={isCollapsed ? label : ''}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      {!isCollapsed && (
                        <span className="truncate">{label}</span>
                      )}
                    </div>
                    {!isCollapsed && (
                      isExpanded
                        ? <ChevronDown className="w-3.5 h-3.5 flex-shrink-0" />
                        : <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
                    )}
                  </button>

                  {/* Sub menus with accordion animation */}
                  {!isCollapsed && (
                    <div
                      className="ml-5 border-l border-slate-700 pl-2.5 overflow-hidden transition-all duration-300 ease-in-out"
                      style={{
                        maxHeight: isExpanded ? '500px' : '0px',
                        opacity: isExpanded ? 1 : 0,
                        marginTop: isExpanded ? '4px' : '0px',
                      }}
                    >
                      <div className="space-y-0.5">
                        {menu.children.map((child) => {
                          const childLabel = (t as any)[child.key] || child.key;
                          const isChildActive = location.pathname === child.path;

                          return (
                            <Link
                              key={child.key}
                              to={child.path}
                              className={`
                                block px-2.5 py-1.5 rounded-md text-[12px] transition-all
                                ${isChildActive
                                  ? 'border border-white/60 text-white font-semibold shadow-[0_0_8px_rgba(255,255,255,0.2)] bg-white/5'
                                  : 'border border-transparent text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                                }
                              `}
                            >
                              {childLabel}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        {/* Logout — below last menu */}
        <div className="px-3 pb-4 pt-1">
          {!isCollapsed ? (
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-red-400 hover:bg-red-900/30 transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span>{t.logout}</span>
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center p-2.5 rounded-lg text-red-400 hover:bg-red-900/30"
              title={t.logout}
            >
              <LogOut className="w-5 h-5" />
            </button>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
