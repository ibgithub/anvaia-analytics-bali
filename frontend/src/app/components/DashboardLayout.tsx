import { useState, useEffect, useMemo } from 'react';
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
  User,
  ShieldCheck,
  Building2,
  FileText,
  type LucideIcon,
} from 'lucide-react';
import { useI18n } from '../i18n';
import { AnvAILogo } from './AnvAILogo';

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
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const [currentUser, setCurrentUser] = useState<{ username: string; role: string; name?: string }>({
    username: 'admin',
    role: 'ADMIN',
  });

  useEffect(() => {
    const raw = localStorage.getItem('auth_user');
    if (raw) {
      try {
        if (raw.startsWith('{')) {
          setCurrentUser(JSON.parse(raw));
        } else {
          setCurrentUser({ username: raw, role: 'ADMIN' });
        }
      } catch (e) {}
    }
  }, []);

  // Load menu from localStorage
  const menuStructure = useMemo<DisplayMenu[]>(() => {
    try {
      const stored = localStorage.getItem('auth_menus');
      if (stored) {
        const apiMenus: ApiMenu[] = JSON.parse(stored);
        if (Array.isArray(apiMenus) && apiMenus.length > 0) {
          return buildMenuFromApi(apiMenus);
        }
      }
    } catch (e) {}
    
    // Default fallback structure
    return [
      { key: 'menu_m1', code: 'M1', icon: LayoutDashboard, path: '/executive', children: [] },
      { key: 'menu_m2', code: 'M2', icon: Users, path: '/segmentation', children: [] },
      { key: 'menu_m3', code: 'M3', icon: TrendingDown, path: '/churn', children: [] },
      { key: 'menu_m4', code: 'M4', icon: DollarSign, path: '/profitability', children: [] },
      { key: 'menu_m5', code: 'M5', icon: ShoppingBag, path: '/recommendation', children: [] },
      { key: 'menu_m6', code: 'M6', icon: UserCircle, path: '/customer-profile', children: [] },
      { key: 'menu_m7', code: 'M7', icon: BarChart3, path: '/reports', children: [] },
      { key: 'menu_m8', code: 'M8', icon: Settings, path: '/settings', children: [] },
    ];
  }, []);

  // Auto-expand active accordion menu matching current route
  useEffect(() => {
    let matchedKey: string | null = null;
    menuStructure.forEach((parent) => {
      if (parent.children.some((c) => location.pathname === c.path)) {
        matchedKey = parent.key;
      }
    });
    setExpandedKey(matchedKey);
  }, [location.pathname, menuStructure]);

  function toggleAccordion(key: string) {
    setExpandedKey((prev) => (prev === key ? null : key));
  }

  function handleLogout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    localStorage.removeItem('auth_menus');
    navigate('/login', { replace: true });
  }

  return (
    <div className="flex h-screen bg-[#F4F7F6] font-sans text-[#142826] overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          isCollapsed ? 'w-20' : 'w-64'
        } bg-[#073B35] text-white border-r border-[#0F5E55] transition-all duration-300 flex flex-col justify-between z-20 shadow-xl overflow-y-auto`}
      >
        <div>
          {/* Brand Header */}
          <div className="p-3.5 border-b border-[#0F5E55]">
            <div className="flex items-center justify-between">
              {isCollapsed ? (
                <div className="w-full text-center">
                  <AnvAILogo variant="icon" size="sm" />
                </div>
              ) : (
                <div className="flex items-center gap-2 truncate">
                  <AnvAILogo variant="icon" size="sm" />
                  <div className="truncate">
                    <h1 className="text-xs font-black tracking-tight bg-gradient-to-r from-[#FFD54F] via-[#FFA000] to-[#FF8F00] bg-clip-text text-transparent uppercase truncate">
                      AnvAIa Analytics
                    </h1>
                    <p className="text-[9px] uppercase tracking-widest text-[#E0EBE8] font-bold truncate">
                      PT Bank BPD Bali
                    </p>
                  </div>
                </div>
              )}
              <button
                type="button"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#0C4E46] text-[#E0EBE8] hover:text-white transition"
              >
                {isCollapsed ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* User Profile Banner in Sidebar */}
          {!isCollapsed && (
            <div className="mx-3 mt-3 p-3 rounded-xl bg-[#0C4E46] border border-[#0F5E55] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-bold text-xs">
                {(currentUser.username || 'A').charAt(0).toUpperCase()}
              </div>
              <div className="truncate">
                <div className="text-xs font-bold text-white truncate">
                  {currentUser.username}
                </div>
                <div className="text-[10px] text-[#D4AF37] font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>{currentUser.role}</span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="p-3">
            <div className="space-y-1">
              {menuStructure.map((menu) => {
                const Icon = menu.icon;
                const hasChildren = menu.children.length > 0;
                const isExpanded = expandedKey === menu.key;
                const isParentActive =
                  hasChildren && menu.children.some((c) => location.pathname === c.path);
                const isSingleActive =
                  !hasChildren && (location.pathname === menu.path || location.pathname.startsWith(menu.path + '/'));
                const label = (t as any)[menu.key] || menu.key;

                return (
                  <div key={menu.key}>
                    {hasChildren ? (
                      <button
                        type="button"
                        onClick={() => {
                          if (isCollapsed) {
                            setIsCollapsed(false);
                            setExpandedKey(menu.key);
                          } else {
                            toggleAccordion(menu.key);
                          }
                        }}
                        className={`
                          w-full flex items-center ${
                            isCollapsed ? 'justify-center' : 'justify-between'
                          } gap-3 px-3 py-2.5 rounded-xl transition text-xs font-semibold
                          ${
                            isParentActive
                              ? 'bg-[#D4AF37] text-[#073B35] font-bold shadow-md shadow-[#D4AF37]/20'
                              : 'text-[#E0EBE8] hover:bg-[#0C4E46] hover:text-white'
                          }
                        `}
                        title={isCollapsed ? label : ''}
                      >
                        <div className="flex items-center gap-3 truncate">
                          <Icon
                            className={`w-4 h-4 shrink-0 ${
                              isParentActive ? 'text-[#073B35]' : 'text-[#D4AF37]'
                            }`}
                          />
                          {!isCollapsed && <span className="truncate">{label}</span>}
                        </div>
                        {!isCollapsed &&
                          (isExpanded ? (
                            <ChevronDown className="w-3.5 h-3.5 shrink-0" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                          ))}
                      </button>
                    ) : (
                      <Link
                        to={menu.path}
                        className={`
                          w-full flex items-center ${
                            isCollapsed ? 'justify-center' : 'justify-start'
                          } gap-3 px-3 py-2.5 rounded-xl transition text-xs font-semibold
                          ${
                            isSingleActive
                              ? 'bg-[#D4AF37] text-[#073B35] font-bold shadow-md shadow-[#D4AF37]/20'
                              : 'text-[#E0EBE8] hover:bg-[#0C4E46] hover:text-white'
                          }
                        `}
                        title={isCollapsed ? label : ''}
                      >
                        <Icon
                          className={`w-4 h-4 shrink-0 ${
                            isSingleActive ? 'text-[#073B35]' : 'text-[#D4AF37]'
                          }`}
                        />
                        {!isCollapsed && <span className="truncate">{label}</span>}
                      </Link>
                    )}

                    {/* Submenu Accordion */}
                    {hasChildren && !isCollapsed && (
                      <div
                        className="ml-5 border-l border-[#0F5E55] pl-2.5 overflow-hidden transition-all duration-300 ease-in-out"
                        style={{
                          maxHeight: isExpanded ? '500px' : '0px',
                          opacity: isExpanded ? 1 : 0,
                          marginTop: isExpanded ? '4px' : '0px',
                        }}
                      >
                        <div className="space-y-1">
                          {menu.children.map((child) => {
                            const childLabel = (t as any)[child.key] || child.key;
                            const isChildActive = location.pathname === child.path;

                            return (
                              <Link
                                key={child.key}
                                to={child.path}
                                className={`
                                  w-full flex items-center justify-start gap-2.5 px-3 py-2 rounded-lg transition text-xs font-medium
                                  ${
                                    isChildActive
                                      ? 'bg-white/10 text-[#D4AF37] font-bold border-l-2 border-[#D4AF37]'
                                      : 'text-[#E0EBE8] hover:bg-[#0C4E46] hover:text-white'
                                  }
                                `}
                              >
                                <span className="truncate">{childLabel}</span>
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
        </div>

        {/* Bottom Actions */}
        <div className="p-3 border-t border-[#0F5E55] space-y-2">
          {!isCollapsed ? (
            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-rose-200 hover:bg-rose-900/30 transition border border-transparent hover:border-rose-500/30"
            >
              <LogOut className="w-4 h-4 text-rose-400" />
              <span>{t.logout || 'Keluar (Logout)'}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex items-center justify-center p-2.5 rounded-xl text-rose-300 hover:bg-rose-900/30"
              title={t.logout || 'Logout'}
            >
              <LogOut className="w-5 h-5" />
            </button>
          )}
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header Bar */}
        <header className="h-16 bg-white border-b border-[#D8E4E0] px-6 flex items-center justify-between z-10 shrink-0 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-[#5A726D]">
              <Building2 className="w-4 h-4 text-[#0B5A51]" />
              <span className="font-semibold text-[#142826]">
                PT Bank Pembangunan Daerah Bali
              </span>
              <span className="text-[#D8E4E0]">/</span>
              <span className="text-[#0B5A51] font-bold">AnvAIa Analytics Integration</span>
            </div>
          </div>

          {/* Language Switcher + User Profile */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#F8FAF9] p-1.5 rounded-xl border border-[#D8E4E0]">
              <button
                type="button"
                onClick={() => setLang('id')}
                className={`p-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  lang === 'id'
                    ? 'bg-[#0B5A51] text-white shadow-xs ring-1 ring-[#0B5A51]'
                    : 'hover:bg-white text-[#5A726D]'
                }`}
                title="Bahasa Indonesia"
              >
                <svg width="20" height="14" viewBox="0 0 24 16" className="rounded-sm shrink-0 border border-black/10">
                  <rect width="24" height="8" fill="#FF0000" />
                  <rect y="8" width="24" height="8" fill="#FFFFFF" />
                </svg>
                <span className="text-xs font-bold">ID</span>
              </button>

              <button
                type="button"
                onClick={() => setLang('en')}
                className={`p-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  lang === 'en'
                    ? 'bg-[#0B5A51] text-white shadow-xs ring-1 ring-[#0B5A51]'
                    : 'hover:bg-white text-[#5A726D]'
                }`}
                title="English (UK)"
              >
                <svg width="20" height="14" viewBox="0 0 60 30" className="rounded-sm shrink-0 border border-black/10">
                  <clipPath id="gb-flag-clip-layout"><rect width="60" height="30"/></clipPath>
                  <g clipPath="url(#gb-flag-clip-layout)">
                    <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
                    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                  </g>
                </svg>
                <span className="text-xs font-bold">EN</span>
              </button>
            </div>

            <div className="flex items-center gap-2 pl-2 border-l border-[#D8E4E0]">
              <div className="w-8 h-8 rounded-full bg-[#0B5A51] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                {(currentUser.username || 'A').charAt(0).toUpperCase()}
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-xs font-bold text-[#142826] leading-tight">
                  {currentUser.username}
                </div>
                <div className="text-[10px] text-[#5A726D] font-medium">
                  {currentUser.role}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content Outlet */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8 bg-[#F4F7F6]">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
