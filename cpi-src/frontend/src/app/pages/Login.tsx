import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { useI18n, resolveMessage } from '../i18n';
import { Eye, EyeOff, Lock, User } from 'lucide-react';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [slideOut, setSlideOut] = useState(false);
  const navigate = useNavigate();
  const { lang, t, setLang } = useI18n();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Step 1: Login
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => null);
        if (errData?.data?.remainingAttempts !== undefined) {
          const remaining = errData.data.remainingAttempts;
          const msg = lang === 'id'
            ? `Password Anda salah, Anda punya ${remaining} kali kesempatan`
            : `Wrong password, you have ${remaining} attempts remaining`;
          throw new Error(msg);
        }
        throw new Error(resolveMessage(errData?.message || '', lang) || 'Login gagal');
      }

      const data = await res.json();
      if (!data.success) {
        throw new Error(resolveMessage(data.message || '', lang) || 'Login gagal');
      }
      const token = data.data?.token || '';
      if (!token) throw new Error('Token tidak ditemukan');
      localStorage.setItem('auth_token', token);
      localStorage.setItem('auth_user', username);

      // Decode JWT to get appLang
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (payload.appLang) {
          const lang = payload.appLang.toLowerCase() as 'id' | 'en';
          setLang(lang);
        }
      } catch (e) {}

      // Step 2: Fetch menu permissions
      const menuRes = await fetch('/api/users/me/menus', {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (menuRes.ok) {
        const menuData = await menuRes.json();
        const menus = menuData.data || [];
        localStorage.setItem('auth_menus', JSON.stringify(menus));
      }

      // Redirect ke dashboard with slide animation
      setSlideOut(true);
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 500);
    } catch (err: any) {
      const msg = err.message || 'Error';
      setError(resolveMessage(msg, lang));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#f8fafc]">
      <div className={`min-h-screen flex transition-transform duration-700 ease-in-out ${slideOut ? '-translate-x-full' : 'translate-x-0'}`}>
        
        {/* Left panel — premium branding */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0b0f19] flex-col items-center justify-center p-12 relative overflow-hidden">
          
          {/* Radial grid background overlay */}
          <div 
            className="absolute inset-0 opacity-[0.07]" 
            style={{ 
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', 
              backgroundSize: '24px 24px' 
            }}
          />
          
          {/* Glowing blobs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse duration-[6000ms]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] animate-pulse duration-[8000ms]"></div>

          <div className="relative z-10 text-center max-w-lg">
            {/* Logo box */}
            <div className="w-24 h-24 bg-gradient-to-tr from-blue-600 via-indigo-500 to-violet-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-[0_12px_40px_rgba(79,70,229,0.35)] border border-white/10 relative group">
              <span className="text-white text-4xl font-extrabold tracking-wider filter drop-shadow-md">A</span>
              <div className="absolute inset-0 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300 mb-4">
              ANVAIA
            </h1>
            <p className="text-lg font-medium text-indigo-200 mb-6 tracking-wide">
              Customer Intelligence Platform
            </p>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mb-6"></div>
            <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
              {lang === 'id'
                ? 'Analitik nasabah cerdas berbasis big data untuk keputusan perbankan yang lebih cepat dan presisi.'
                : 'Smart big data customer analytics for faster and more precise banking decisions.'}
            </p>
          </div>
        </div>

        {/* Right panel — login form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 bg-slate-50 relative">
          <div className="w-full max-w-md z-10">
            
            {/* Language toggle */}
            <div className="flex justify-end mb-6 gap-2">
              <button
                onClick={() => setLang('id')}
                className={`p-1.5 rounded-lg transition-all ${lang === 'id' ? 'bg-white shadow-md border border-slate-200/80' : 'hover:bg-slate-200/50'}`}
                title="Bahasa Indonesia"
              >
                <svg width="24" height="16" viewBox="0 0 24 16" className="rounded-md">
                  <rect width="24" height="8" fill="#FF0000"/>
                  <rect y="8" width="24" height="8" fill="#FFFFFF"/>
                </svg>
              </button>
              <button
                onClick={() => setLang('en')}
                className={`p-1.5 rounded-lg transition-all ${lang === 'en' ? 'bg-white shadow-md border border-slate-200/80' : 'hover:bg-slate-200/50'}`}
                title="English"
              >
                <svg width="24" height="16" viewBox="0 0 60 30" className="rounded-md">
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

            {/* Mobile logo (shown on small screens) */}
            <div className="lg:hidden text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">ANVAIA</h1>
              <p className="text-xs text-slate-500 mt-1">Customer Intelligence Platform</p>
            </div>

            {/* Form card */}
            <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-100/80 p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-[0_15px_50px_rgba(0,0,0,0.05)]">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{t.login_title}</h2>
                <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">{t.login_subtitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3.5 rounded-xl text-sm leading-relaxed">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="username" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    {t.login_username}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-200 bg-slate-50/50 focus:bg-white placeholder-slate-400 text-slate-800"
                      placeholder={t.login_placeholder_username}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    {t.login_password}
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full pl-11 pr-12 py-3 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all duration-200 bg-slate-50/50 focus:bg-white placeholder-slate-400 text-slate-800"
                      placeholder={t.login_placeholder_password}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
                    >
                      {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] disabled:scale-100 disabled:opacity-50 text-white font-semibold rounded-xl transition-all duration-200 shadow-[0_4px_15px_rgba(79,70,229,0.25)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.35)]"
                >
                  {loading ? t.login_loading : t.login_button}
                </button>
              </form>
            </div>

            <p className="text-center text-xs text-slate-400 mt-8">
              © 2026 ANVAIA — Customer Intelligence Platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
