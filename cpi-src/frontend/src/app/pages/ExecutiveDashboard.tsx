// Halaman: Executive Dashboard — Demografi Nasabah
// Integrated with executive-service API endpoints

import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts';
import { formatThousands, formatRupiahJuta, formatRupiahBesar, formatPercentChange, formatShortNumber } from '../utils/formatters';
import { distribusiPekerjaan, distribusiProduk, distribusiSegmen, trendPertumbuhan } from '../constants/fallbackData';

// === API RESPONSE INTERFACES ===

export interface ApiResponse<T> {
  success: boolean;
  status: string;
  message: string;
  data: T;
}

export interface DemographicKpiDto {
  totalNasabahAktif: number;
  totalNasabahAktifChange: number;
  pertumbuhanBulanIni: number;
  pertumbuhanBulanIniChange: number;
  rataRataSaldo: number;
  rataRataSaldoChange: number;
  totalDanaKelolaan: number;
  totalDanaKelolaanChange: number;
}

export interface BranchDistributionDto {
  branchName: string;
  nasabahCount: number;
}

export interface AgeDistributionDto {
  ageRange: string;
  nasabahCount: number;
}

export interface GenderDistributionDto {
  gender: string;
  nasabahCount: number;
}

export interface SectionState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}


// === SUB-COMPONENTS ===

function ChartSkeleton({ height }: { height: number }) {
  return (
    <div
      className="animate-pulse bg-slate-200 rounded w-full"
      style={{ height: `${height}px` }}
    />
  );
}

function ChartError({ message }: { message: string }) {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[120px]">
      <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-4 py-2 text-center">
        {message}
      </p>
    </div>
  );
}

function ChartEmpty({ message }: { message: string }) {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[120px]">
      <p className="text-sm text-slate-400 text-center">{message}</p>
    </div>
  );
}

function FallbackBadge() {
  return (
    <span
      className="absolute top-2 right-2 bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded"
      style={{ fontSize: '11px' }}
    >
      Data Contoh
    </span>
  );
}

// === HELPER ===

function getToken(): string | null {
  const token = localStorage.getItem('auth_token');
  return token && token.trim() !== '' ? token : null;
}

// === COMPONENT ===

export function ExecutiveDashboard() {
  // Auth state
  const [authError, setAuthError] = useState<string | null>(null);

  // Section states for API data
  const [kpi, setKpi] = useState<SectionState<DemographicKpiDto>>({ data: null, loading: true, error: null });
  const [branch, setBranch] = useState<SectionState<BranchDistributionDto[]>>({ data: null, loading: true, error: null });
  const [age, setAge] = useState<SectionState<AgeDistributionDto[]>>({ data: null, loading: true, error: null });
  const [gender, setGender] = useState<SectionState<GenderDistributionDto[]>>({ data: null, loading: true, error: null });

  // Generic fetch helper for each section
  async function fetchSection<T>(
    url: string,
    setState: React.Dispatch<React.SetStateAction<SectionState<T>>>
  ): Promise<void> {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const res = await fetch(url, {
        headers: { 'Authorization': `Bearer ${getToken()}` },
      });

      if (res.status === 401) {
        toast('Sesi telah berakhir. Silakan login ulang.');
        setState(prev => ({ ...prev, loading: false, error: 'Sesi telah berakhir' }));
        return;
      }

      if (res.status === 403) {
        setState(prev => ({ ...prev, loading: false, error: 'Access denied' }));
        return;
      }

      if (!res.ok) {
        let errorMsg = 'Terjadi kesalahan';
        try {
          const errorJson = await res.json();
          errorMsg = errorJson.message || errorMsg;
        } catch {
          // use default error message
        }
        setState(prev => ({ ...prev, loading: false, error: errorMsg }));
        return;
      }

      const json: ApiResponse<T> = await res.json();
      if (json.success) {
        setState({ data: json.data, loading: false, error: null });
      } else {
        setState({ data: null, loading: false, error: json.message || 'Terjadi kesalahan' });
      }
    } catch {
      setState(prev => ({ ...prev, loading: false, error: 'Gagal memuat data. Periksa koneksi Anda.' }));
    }
  }

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setAuthError('Token tidak ditemukan. Silakan login ulang.');
      return;
    }

    // Fetch all 4 sections in parallel
    fetchSection<DemographicKpiDto>('/api/v1/executive/demographic/kpi', setKpi);
    fetchSection<BranchDistributionDto[]>('/api/v1/executive/demographic/branch-distribution?limit=10', setBranch);
    fetchSection<AgeDistributionDto[]>('/api/v1/executive/demographic/age-distribution', setAge);
    fetchSection<GenderDistributionDto[]>('/api/v1/executive/demographic/gender-distribution', setGender);
  }, []);

  // Early return for auth error
  if (authError) {
    return (
      <div className="p-5">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-sm text-red-700">{authError}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 space-y-5">
      {/* Title */}
      <div>
        <h1 className="text-xl font-bold text-slate-800">Demografi & Persebaran Nasabah</h1>
        <p className="text-xs text-slate-500">Analisis karakteristik demografis, persebaran wilayah, dan jenis pekerjaan nasabah aktif</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {kpi.loading ? (
          <>
            <ChartSkeleton height={80} />
            <ChartSkeleton height={80} />
            <ChartSkeleton height={80} />
            <ChartSkeleton height={80} />
          </>
        ) : kpi.error ? (
          <div className="col-span-2 lg:col-span-4">
            <ChartError message={kpi.error} />
          </div>
        ) : kpi.data ? (
          <>
            <div className="rounded-lg border p-4 bg-emerald-50 border-emerald-200">
              <p className="text-[11px] text-slate-600">Total Nasabah Aktif</p>
              <p className="text-lg font-bold text-slate-900 mt-0.5">{formatThousands(kpi.data.totalNasabahAktif)}</p>
              <p className={`text-[11px] mt-0.5 ${kpi.data.totalNasabahAktifChange >= 0 ? 'text-emerald-600' : 'text-red-600'}`}>{formatPercentChange(kpi.data.totalNasabahAktifChange)} vs bulan lalu</p>
            </div>
            <div className="rounded-lg border p-4 bg-blue-50 border-blue-200">
              <p className="text-[11px] text-slate-600">Pertumbuhan Bulan Ini</p>
              <p className="text-lg font-bold text-slate-900 mt-0.5">+{formatThousands(kpi.data.pertumbuhanBulanIni)}</p>
              <p className={`text-[11px] mt-0.5 ${kpi.data.pertumbuhanBulanIniChange >= 0 ? 'text-blue-600' : 'text-red-600'}`}>{formatPercentChange(kpi.data.pertumbuhanBulanIniChange)} vs bulan lalu</p>
            </div>
            <div className="rounded-lg border p-4 bg-violet-50 border-violet-200">
              <p className="text-[11px] text-slate-600">Rata-rata Saldo</p>
              <p className="text-lg font-bold text-slate-900 mt-0.5">{formatRupiahJuta(kpi.data.rataRataSaldo)}</p>
              <p className={`text-[11px] mt-0.5 ${kpi.data.rataRataSaldoChange >= 0 ? 'text-violet-600' : 'text-red-600'}`}>{formatPercentChange(kpi.data.rataRataSaldoChange)} vs bulan lalu</p>
            </div>
            <div className="rounded-lg border p-4 bg-amber-50 border-amber-200">
              <p className="text-[11px] text-slate-600">Total Dana Kelolaan</p>
              <p className="text-lg font-bold text-slate-900 mt-0.5">{formatRupiahBesar(kpi.data.totalDanaKelolaan)}</p>
              <p className={`text-[11px] mt-0.5 ${kpi.data.totalDanaKelolaanChange >= 0 ? 'text-amber-600' : 'text-red-600'}`}>{formatPercentChange(kpi.data.totalDanaKelolaanChange)} vs bulan lalu</p>
            </div>
          </>
        ) : null}
      </div>

      {/* Row 1: Persebaran Kota + Distribusi Usia */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Persebaran per Kota */}
        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <h3 className="text-xs font-semibold text-slate-700 mb-3">Persebaran Nasabah per Kota/Cabang</h3>
          {branch.loading ? (
            <ChartSkeleton height={220} />
          ) : branch.error ? (
            <ChartError message={branch.error} />
          ) : branch.data && branch.data.length === 0 ? (
            <ChartEmpty message="Data persebaran belum tersedia" />
          ) : branch.data ? (
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={branch.data.map(b => ({ kota: b.branchName, nasabah: b.nasabahCount }))} layout="vertical" margin={{ left: 60, right: 20, top: 5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis type="number" tick={{ fontSize: 10 }} />
                <YAxis type="category" dataKey="kota" tick={{ fontSize: 10 }} width={55} />
                <Tooltip contentStyle={{ fontSize: 11 }} />
                <Bar dataKey="nasabah" fill="#3B82F6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : null}
        </div>

        {/* Distribusi Usia */}
        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <h3 className="text-xs font-semibold text-slate-700 mb-3">Distribusi Usia Nasabah</h3>
          {age.loading ? (
            <ChartSkeleton height={220} />
          ) : age.error ? (
            <ChartError message={age.error} />
          ) : age.data ? (
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={age.data.map(a => ({ range: a.ageRange, jumlah: a.nasabahCount }))} margin={{ left: 10, right: 20, top: 5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="range" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip contentStyle={{ fontSize: 11 }} />
                <Bar dataKey="jumlah" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : null}
        </div>
      </div>

      {/* Row 2: Gender + Pekerjaan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Gender */}
        <div className="bg-white border border-slate-200 rounded-lg p-4">
          <h3 className="text-xs font-semibold text-slate-700 mb-3">Distribusi Gender</h3>
          {gender.loading ? (
            <ChartSkeleton height={160} />
          ) : gender.error ? (
            <ChartError message={gender.error} />
          ) : gender.data ? (
            <div className="flex items-center">
              <ResponsiveContainer width="50%" height={160}>
                <PieChart>
                  <Pie data={gender.data.map(g => ({ name: g.gender, value: g.nasabahCount, color: g.gender === 'Pria' ? '#3B82F6' : '#EC4899' }))} cx="50%" cy="50%" innerRadius={40} outerRadius={65} dataKey="value">
                    {gender.data.map((g, i) => <Cell key={i} fill={g.gender === 'Pria' ? '#3B82F6' : '#EC4899'} />)}
                  </Pie>
                  <Tooltip contentStyle={{ fontSize: 11 }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2">
                {gender.data.map((g) => (
                  <div key={g.gender} className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: g.gender === 'Pria' ? '#3B82F6' : '#EC4899' }}></div>
                    <span className="text-[11px] text-slate-600">{g.gender}: <span className="font-medium">{formatShortNumber(g.nasabahCount)}</span></span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        {/* Pekerjaan (Fallback) */}
        <div className="bg-white border border-slate-200 rounded-lg p-4 relative">
          <FallbackBadge />
          <h3 className="text-xs font-semibold text-slate-700 mb-3">Distribusi Pekerjaan</h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={distribusiPekerjaan} layout="vertical" margin={{ left: 90, right: 20, top: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis type="number" tick={{ fontSize: 10 }} />
              <YAxis type="category" dataKey="pekerjaan" tick={{ fontSize: 10 }} width={85} />
              <Tooltip contentStyle={{ fontSize: 11 }} />
              <Bar dataKey="jumlah" fill="#10B981" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Row 3: Produk + Segmen */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Distribusi Produk (Fallback) */}
        <div className="bg-white border border-slate-200 rounded-lg p-4 relative">
          <FallbackBadge />
          <h3 className="text-xs font-semibold text-slate-700 mb-3">Distribusi Produk</h3>
          <div className="flex items-center">
            <ResponsiveContainer width="50%" height={160}>
              <PieChart>
                <Pie data={distribusiProduk} cx="50%" cy="50%" innerRadius={40} outerRadius={65} dataKey="value">
                  {distribusiProduk.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2">
              {distribusiProduk.map((p) => (
                <div key={p.name} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color }}></div>
                  <span className="text-[11px] text-slate-600">{p.name}: <span className="font-medium">{(p.value / 1000).toFixed(1)}rb</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Segmen Nasabah (Fallback) */}
        <div className="bg-white border border-slate-200 rounded-lg p-4 relative">
          <FallbackBadge />
          <h3 className="text-xs font-semibold text-slate-700 mb-3">Distribusi Segmen Nasabah</h3>
          <div className="flex items-center">
            <ResponsiveContainer width="50%" height={160}>
              <PieChart>
                <Pie data={distribusiSegmen} cx="50%" cy="50%" innerRadius={40} outerRadius={65} dataKey="value">
                  {distribusiSegmen.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2">
              {distribusiSegmen.map((s) => (
                <div key={s.name} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }}></div>
                  <span className="text-[11px] text-slate-600">{s.name}: <span className="font-medium">{(s.value / 1000).toFixed(1)}rb</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row 4: Tren Pertumbuhan (Fallback, full width) */}
      <div className="bg-white border border-slate-200 rounded-lg p-4 relative">
        <FallbackBadge />
        <h3 className="text-xs font-semibold text-slate-700 mb-3">Tren Pertumbuhan Nasabah 2026</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={trendPertumbuhan} margin={{ left: 20, right: 20, top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="bulan" tick={{ fontSize: 10 }} />
            <YAxis tick={{ fontSize: 10 }} domain={['dataMin - 1000', 'dataMax + 1000']} />
            <Tooltip contentStyle={{ fontSize: 11 }} />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Line type="monotone" dataKey="nasabah" stroke="#3B82F6" strokeWidth={2} dot={{ r: 3 }} name="Jumlah Nasabah" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-slate-200 text-center text-xs text-slate-400">
        © 2026 <span className="font-semibold text-slate-500">ANVAIA</span> — Customer Intelligence Platform
      </div>
    </div>
  );
}
