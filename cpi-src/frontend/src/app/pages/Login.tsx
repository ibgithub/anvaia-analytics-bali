import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { useI18n, resolveMessage } from '../i18n';
import { Eye, EyeOff } from 'lucide-react';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
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

      // Redirect ke dashboard
      navigate('/', { replace: true });
    } catch (err: any) {
      const msg = err.message || 'Error';
      setError(resolveMessage(msg, lang));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#1F3864] to-[#162A4C] flex items-center justify-center p-4">
      {/* Login box */}
      <div className="bg-white rounded-2xl p-8 w-full max-w-[360px] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
        
        {/* Language toggle — top right */}
        <div className="flex justify-end mb-5 gap-2">
          <button
            onClick={() => setLang('id')}
            className={`p-1.5 rounded-lg transition-all ${lang === 'id' ? 'bg-slate-100 shadow-sm ring-1 ring-slate-200' : 'hover:bg-slate-100'}`}
            title="Bahasa Indonesia"
          >
            <svg width="24" height="16" viewBox="0 0 24 16" className="rounded-[3px]">
              <rect width="24" height="8" fill="#FF0000"/>
              <rect y="8" width="24" height="8" fill="#FFFFFF" stroke="#e0e0e0" strokeWidth="0.5"/>
            </svg>
          </button>
          <button
            onClick={() => setLang('en')}
            className={`p-1.5 rounded-lg transition-all ${lang === 'en' ? 'bg-slate-100 shadow-sm ring-1 ring-slate-200' : 'hover:bg-slate-100'}`}
            title="English"
          >
            <svg width="24" height="16" viewBox="0 0 60 30" className="rounded-[3px]">
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

        {/* Logo */}
        <div className="w-12 h-12 rounded-[10px] bg-[#B4522E] flex items-center justify-center mb-4">
          <span className="text-white text-lg font-bold tracking-wide">DSI</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-[#23211C] mb-0.5">CPI Analytics</h2>
        <p className="text-[#6B6862] text-[13px] mb-6">
          {lang === 'id'
            ? 'Portal analitik nasabah — masuk untuk melanjutkan'
            : 'Customer analytics portal — sign in to continue'}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2.5 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="username" className="block text-xs font-semibold text-[#6B6862] mb-1.5">
              {t.login_username}
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2.5 border border-[#E7E3DA] rounded-lg focus:ring-2 focus:ring-[#B4522E]/20 focus:border-[#B4522E] outline-none transition bg-white text-[#23211C] text-sm placeholder-[#9A968E]"
              placeholder={t.login_placeholder_username}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs font-semibold text-[#6B6862] mb-1.5">
              {t.login_password}
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 pr-10 py-2.5 border border-[#E7E3DA] rounded-lg focus:ring-2 focus:ring-[#B4522E]/20 focus:border-[#B4522E] outline-none transition bg-white text-[#23211C] text-sm placeholder-[#9A968E]"
                placeholder={t.login_placeholder_password}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A968E] hover:text-[#6B6862] transition"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 bg-[#B4522E] hover:bg-[#D9743F] active:scale-[0.98] disabled:opacity-50 text-white font-semibold rounded-lg transition-all duration-200 text-sm mt-2"
          >
            {loading ? t.login_loading : t.login_button}
          </button>
        </form>

        <p className="text-center text-[11px] text-[#9A968E] mt-6">
          {lang === 'id'
            ? 'Mockup — kredensial apa pun diterima di mode demo.'
            : 'Mockup — any credentials accepted in demo mode.'}
        </p>
      </div>
    </div>
  );
}
