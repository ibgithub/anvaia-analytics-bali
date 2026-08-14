// Halaman: Watchlist Churn (M3.1)
// Data dummy static — ganti dengan API call nanti

const stats = [
  { label: 'Churn risk tinggi', value: '312', sub: 'Skor > 75%', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' },
  { label: 'Skor memburuk minggu ini', value: '147', sub: 'Naik ≥10 poin', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' },
  { label: 'Berhasil diretensi bulan ini', value: '89', sub: 'Dari 124 yang dihubungi', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  { label: 'Rata-rata churn score', value: '41%', sub: 'Portofolio aktif', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
];

const distribusi = [
  { range: '0–20%', jumlah: 28400, persen: 34 },
  { range: '20–40%', jumlah: 22100, persen: 27 },
  { range: '40–60%', jumlah: 18600, persen: 23 },
  { range: '60–75%', jumlah: 8300, persen: 10 },
  { range: '>75%', jumlah: 5000, persen: 6 },
];

const faktorPenyebab = [
  { faktor: 'Tidak ada transaksi 60+ hari', persen: 38 },
  { faktor: 'Saldo tabungan turun >50%', persen: 29 },
  { faktor: 'Login mobile banking berhenti', persen: 18 },
  { faktor: 'Produk aktif berkurang', persen: 15 },
];

const watchlist = [
  { nasabah: 'Dedi Supriatna', persona: 'Mass affluent saver', churnScore: '82%', faktorUtama: 'Saldo turun 60%', rekomendasi: 'Tawarkan deposito berjangka via RM senior', status: 'Dijadwalkan' },
  { nasabah: 'Sri Wahyuni', persona: 'Stable retiree', churnScore: '71%', faktorUtama: 'Tidak login 75 hari', rekomendasi: 'Undang ke acara khusus nasabah loyal', status: 'Belum diproses' },
  { nasabah: 'Rudi Hermawan', persona: 'Business owner', churnScore: '78%', faktorUtama: 'Produk aktif turun', rekomendasi: 'Diskusikan kredit modal kerja kondisi khusus', status: 'Sudah dihubungi' },
  { nasabah: 'Yanti Kusuma', persona: 'Young urban professional', churnScore: '66%', faktorUtama: 'Frekuensi transaksi turun', rekomendasi: 'Aktivasi fitur cashback di mobile banking', status: 'Belum diproses' },
];

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, string> = {
    'Dijadwalkan': 'bg-blue-100 text-blue-700',
    'Belum diproses': 'bg-slate-100 text-slate-600',
    'Sudah dihubungi': 'bg-green-100 text-green-700',
  };
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status] || 'bg-slate-100 text-slate-600'}`}>
      {status}
    </span>
  );
}

export function ChurnWatchlist() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Watchlist Churn</h1>
        <p className="text-sm text-slate-500 mt-1">
          Use Case 2 · 1.084 nasabah dalam watchlist · Diperbarui harian pukul 06.00 WIB
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className={`rounded-xl border p-5 ${stat.bg} ${stat.border}`}>
            <p className="text-sm text-slate-600">{stat.label}</p>
            <p className={`text-2xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
            <p className="text-sm text-slate-500 mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Distribusi churn score */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h2 className="font-semibold text-slate-900 mb-1">Distribusi churn score</h2>
          <p className="text-sm text-slate-500 mb-4">Sebaran skor seluruh portofolio nasabah aktif</p>
          <div className="space-y-3">
            {distribusi.map((item) => (
              <div key={item.range} className="flex items-center gap-3">
                <span className="text-sm text-slate-600 w-16">{item.range}</span>
                <div className="flex-1 bg-slate-100 rounded-full h-5">
                  <div
                    className="bg-blue-500 h-5 rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${item.persen * 2.5}%` }}
                  >
                    <span className="text-[10px] text-white font-medium">{(item.jumlah / 1000).toFixed(1)}rb</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Faktor penyebab dominan */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <h2 className="font-semibold text-slate-900 mb-1">Faktor penyebab dominan</h2>
          <p className="text-sm text-slate-500 mb-4">Driver churn paling sering muncul bulan ini</p>
          <div className="space-y-4">
            {faktorPenyebab.map((item) => (
              <div key={item.faktor}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-slate-700">{item.faktor}</span>
                  <span className="text-sm font-medium text-slate-700">{item.persen}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div
                    className="bg-orange-400 h-3 rounded-full"
                    style={{ width: `${item.persen * 2.5}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Watchlist table */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h2 className="font-semibold text-slate-900 mb-4">Watchlist churn — nasabah prioritas</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-2 font-medium text-slate-600">Nasabah</th>
                <th className="text-left py-3 px-2 font-medium text-slate-600">Persona</th>
                <th className="text-left py-3 px-2 font-medium text-slate-600">Churn score</th>
                <th className="text-left py-3 px-2 font-medium text-slate-600">Faktor utama</th>
                <th className="text-left py-3 px-2 font-medium text-slate-600">Rekomendasi retensi</th>
                <th className="text-left py-3 px-2 font-medium text-slate-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {watchlist.map((row) => (
                <tr key={row.nasabah} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 px-2 font-medium text-slate-900">{row.nasabah}</td>
                  <td className="py-3 px-2 text-slate-600">{row.persona}</td>
                  <td className="py-3 px-2 font-medium text-red-600">{row.churnScore}</td>
                  <td className="py-3 px-2 text-slate-600">{row.faktorUtama}</td>
                  <td className="py-3 px-2 text-slate-600 max-w-xs">{row.rekomendasi}</td>
                  <td className="py-3 px-2"><StatusBadge status={row.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
