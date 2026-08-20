import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router';
import {
  Lock,
  User,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  AlertCircle,
  Eye,
  EyeOff,
  Activity,
  ArrowLeftRight,
  Database,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { useI18n, resolveMessage } from '../i18n';
import { AnvAILogo } from '../components/AnvAILogo';

// Flag SVG components
function IndonesiaFlag() {
  return (
    <svg width="22" height="15" viewBox="0 0 24 16" className="rounded-sm shrink-0 border border-black/10">
      <rect width="24" height="8" fill="#FF0000" />
      <rect y="8" width="24" height="8" fill="#FFFFFF" />
    </svg>
  );
}

function GBFlag() {
  return (
    <svg width="22" height="15" viewBox="0 0 60 30" className="rounded-sm shrink-0 border border-black/10">
      <clipPath id="gb-flag-clip"><rect width="60" height="30"/></clipPath>
      <g clipPath="url(#gb-flag-clip)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  );
}

export function Login() {
  const navigate = useNavigate();
  const { lang, t, setLang } = useI18n();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Type helper for dynamic translation keys
  const tr = t as any;

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    try {
      // Step 1: Login API
      const resp = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!resp.ok) {
        const errData = await resp.json().catch(() => null);
        if (errData?.data?.remainingAttempts !== undefined) {
          const remaining = errData.data.remainingAttempts;
          const msg = lang === 'id'
            ? `Password Anda salah, Anda punya ${remaining} kali kesempatan lagi`
            : `Wrong password, you have ${remaining} attempts remaining`;
          throw new Error(msg);
        }
        throw new Error(resolveMessage(errData?.message || '', lang) || (lang === 'id' ? 'Login gagal. Periksa username & password.' : 'Login failed. Check username & password.'));
      }

      const res = await resp.json();
      if (!res.success) {
        throw new Error(resolveMessage(res.message || '', lang) || 'Login gagal.');
      }

      const token = res.data?.token || '';
      if (!token) throw new Error('Token autentikasi tidak ditemukan.');

      localStorage.setItem('auth_token', token);
      localStorage.setItem(
        'auth_user',
        JSON.stringify({
          username: username,
          role: res.data?.role || 'ADMIN',
          name: username.toUpperCase(),
        })
      );

      // Decode JWT payload for appLang
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (payload.appLang) {
          const jwtLang = payload.appLang.toLowerCase() as 'id' | 'en';
          setLang(jwtLang);
        }
      } catch (e) {}

      // Step 2: Fetch menu permissions
      const menuRes = await fetch('/api/users/me/menus', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (menuRes.ok) {
        const menuData = await menuRes.json();
        const menus = menuData.data || [];
        localStorage.setItem('auth_menus', JSON.stringify(menus));
      }

      navigate('/', { replace: true });
    } catch (err: any) {
      setErrorMsg(err.message || (lang === 'id' ? 'Gagal terhubung ke server auth-service.' : 'Failed to connect to auth-service server.'));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#F4F7F6] flex flex-col justify-between font-sans selection:bg-[#C5A059]/20 selection:text-[#0B5A51]">
      {/* Top Navbar */}
      <header className="w-full bg-white/90 backdrop-blur-md border-b border-[#D8E4E0] px-6 py-3.5 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <AnvAILogo size="md" />

          <div className="flex items-center gap-4 text-xs font-semibold text-[#5A726D]">
            {/* Flag-Based Language Switcher (ID / EN Flags) */}
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
                <IndonesiaFlag />
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
                <GBFlag />
                <span className="text-xs font-bold">EN</span>
              </button>
            </div>

            <span className="hidden md:inline text-[#D8E4E0]">|</span>
            <span className="hidden md:inline text-[#142826] font-bold">Model Engine v2.5</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="w-full bg-white rounded-3xl border border-[#D8E4E0] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
          
          {/* Left Hero & Enterprise Middleware Architecture Section */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#073B35] via-[#0B5A51] to-[#0D6B60] p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0E7065]/30 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20"></div>

            <div className="relative z-10 space-y-6">
              {/* Badge */}
              <div className="flex items-center gap-3">
                <AnvAILogo variant="icon" size="sm" />
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-[#F0E6D2]">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFA726]" />
                  <span>{tr.login_hero_badge || 'AnvAIa Analytics ➔ BPD Bali Customer Portal'}</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  {tr.login_hero_title || 'AnvAIa Enterprise'} <br />
                  <span className="bg-gradient-to-r from-[#FFD54F] via-[#FFA000] to-[#FF8F00] bg-clip-text text-transparent">
                    {tr.login_hero_title_highlight || 'Machine Learning Portal'}
                  </span>
                </h1>
                <p className="mt-3 text-sm text-[#E0EBE8] max-w-lg leading-relaxed font-normal">
                  {tr.login_hero_desc || 'Portal analitik kecerdasan portofolio nasabah berbasis Machine Learning & AI untuk Customer Segmentation, prediksi churn, dan rekomendasi personalisasi.'}
                </p>
              </div>

              {/* Middleware Pipeline Flow Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg max-w-lg">
                <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
                  <div className="text-[11px] font-bold tracking-wider uppercase text-[#FFA726] flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>{tr.login_pipeline_title || 'ALUR ANALISIS PORTOFOLIO'}</span>
                  </div>
                  <span className="text-[10px] text-white/80 font-mono bg-white/15 px-2 py-0.5 rounded-full">
                    {tr.login_pipeline_tag || 'Real-time Pipeline'}
                  </span>
                </div>

                {/* Pipeline Steps */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center relative">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                    <Layers className="w-4 h-4 text-[#FFA726] mx-auto mb-1" />
                    <div className="text-[11px] font-bold text-white">{tr.login_step_data || 'Data Core'}</div>
                    <div className="text-[9px] text-white/70 mt-0.5">{tr.login_step_data_sub || 'Transaksi Nasabah'}</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#FFA726]/20 border border-[#FFA726]/40 flex flex-col justify-center">
                    <ArrowLeftRight className="w-4 h-4 text-[#FFD54F] mx-auto mb-1" />
                    <div className="text-[11px] font-bold text-[#FFD54F]">{tr.login_step_engine || 'Machine Learning Engine'}</div>
                    <div className="text-[9px] text-white/80 mt-0.5">{tr.login_step_engine_sub || 'ML & Profiling'}</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                    <Database className="w-4 h-4 text-emerald-300 mx-auto mb-1" />
                    <div className="text-[11px] font-bold text-white">{tr.login_step_web || 'Analytics Web'}</div>
                    <div className="text-[9px] text-white/70 mt-0.5">{tr.login_step_web_sub || 'Dashboard Executive'}</div>
                  </div>
                </div>
              </div>

              {/* 3 Core Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#FFA726] mb-1.5" />
                  <div className="text-xs font-bold text-white">{tr.login_pillar_churn || 'Prediksi Churn'}</div>
                  <p className="text-[10px] text-white/70 mt-0.5">{tr.login_pillar_churn_sub || 'Skor Churn Index 0–100'}</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-[#FFA726] mb-1.5" />
                  <div className="text-xs font-bold text-white">{tr.login_pillar_segment || 'Customer Segmentation'}</div>
                  <p className="text-[10px] text-white/70 mt-0.5">{tr.login_pillar_segment_sub || 'Pengelompokan Persona'}</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <Database className="w-4 h-4 text-[#FFA726] mb-1.5" />
                  <div className="text-xs font-bold text-white">{tr.login_pillar_priority || 'Matriks Prioritas'}</div>
                  <p className="text-[10px] text-white/70 mt-0.5">{tr.login_pillar_priority_sub || '9 Kluster Hot Target'}</p>
                </div>
              </div>
            </div>

            {/* Footer Left */}
            <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
              <span>© PT Bank Pembangunan Daerah Bali</span>
              <span className="font-semibold text-white/80">Bank BPD Bali</span>
            </div>
          </div>

          {/* Right Form Panel — Login */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-white">
            <div>
              <div className="mb-6">
                <div className="inline-block px-2.5 py-1 rounded-md bg-[#EBF3F1] text-[#0B5A51] text-[11px] font-bold uppercase tracking-wider mb-2">
                  {tr.login_portal_badge || 'PORTAL MASUK PETUGAS'}
                </div>
                <h2 className="text-2xl font-black text-[#142826] tracking-tight">
                  {tr.login_portal_title || 'Login Administrator'}
                </h2>
                <p className="text-xs text-[#5A726D] mt-1">
                  {tr.login_portal_desc || 'Masuk menggunakan akun terdaftar untuk mengelola analitik Machine Learning.'}
                </p>
              </div>

              {errorMsg && (
                <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-600" />
                  <span className="font-medium leading-relaxed">{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#142826] mb-1.5">
                    {tr.login_username || 'Username'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5A726D]">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder={tr.login_placeholder_username || 'Masukkan username Anda'}
                      className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#F8FAF9] rounded-xl border border-[#D8E4E0] text-[#142826] focus:outline-none focus:ring-2 focus:ring-[#0B5A51] focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#142826] mb-1.5">
                    {tr.login_password || 'Password'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5A726D]">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={tr.login_placeholder_password || 'Masukkan password Anda'}
                      className="w-full pl-10 pr-10 py-2.5 text-xs bg-[#F8FAF9] rounded-xl border border-[#D8E4E0] text-[#142826] focus:outline-none focus:ring-2 focus:ring-[#0B5A51] focus:bg-white transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#5A726D] hover:text-[#0B5A51] transition"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-[11px] text-[#5A726D]">
                    {tr.login_anti_brute || 'Proteksi Anti Brute-Force Aktif'}
                  </span>
                  <span className="text-[11px] text-[#0B5A51] font-semibold">
                    {tr.login_version_tag || 'v2.5.0 Production'}
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#0B5A51] to-[#073B35] hover:from-[#0E7065] hover:to-[#0B5A51] text-white text-xs font-bold shadow-md shadow-[#0B5A51]/25 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <span>{tr.login_verifying || 'Memverifikasi Akun...'}</span>
                  ) : (
                    <>
                      <span>{tr.login_submit_button || 'Masuk ke Dashboard'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="text-center text-[11px] text-[#5A726D] pt-6 border-t border-[#D8E4E0] mt-6">
              {tr.login_help_text || 'Butuh bantuan teknis? Hubungi'} <span className="font-semibold text-[#0B5A51]">it-support@bankbpdbali.id</span>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Footer */}
      <footer className="w-full text-center py-4 text-xs text-[#5A726D] border-t border-[#D8E4E0] bg-white">
        {tr.login_footer_text || 'PT Bank Pembangunan Daerah Bali — Kantor Pusat Jl. Raya Puputan Niti Mandala, Renon, Denpasar, Bali'}
      </footer>
    </div>
  );
}
