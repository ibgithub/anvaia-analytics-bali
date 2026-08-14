// Halaman: Peta Cluster (M2.1)
// Data dummy static — ganti dengan API call nanti

const clusters = [
  { nama: 'Young urban professional', warna: '#3B82F6', x: 25, y: 70, size: 50, nasabah: 14220, deskripsi: 'Usia 24–34, frekuensi transaksi digital tinggi, saldo menengah, preferensi produk cicilan.' },
  { nama: 'Mass affluent saver', warna: '#F59E0B', x: 70, y: 30, size: 60, nasabah: 9840, deskripsi: 'Usia 38–52, saldo tabungan tinggi, sensitif suku bunga, jarang menggunakan kanal digital.' },
  { nama: 'Digital-first spender', warna: '#EC4899', x: 80, y: 80, size: 45, nasabah: 18560, deskripsi: 'Usia 20–30, transaksi e-wallet dan QRIS dominan, saldo rendah-menengah, frekuensi tinggi.' },
  { nama: 'Tech-savvy starter', warna: '#8B5CF6', x: 50, y: 85, size: 40, nasabah: 11300, deskripsi: 'Usia 18–25, nasabah baru, saldo kecil, sangat aktif di aplikasi mobile banking.' },
  { nama: 'Stable retiree', warna: '#10B981', x: 55, y: 45, size: 35, nasabah: 7140, deskripsi: 'Usia 55+, deposito dominan, transaksi rendah dan stabil, preferensi layanan tatap muka.' },
  { nama: 'Business owner', warna: '#6366F1', x: 75, y: 35, size: 35, nasabah: 5620, deskripsi: 'Usia 35–55, rekening giro aktif, transaksi nilai besar, kebutuhan kredit modal kerja.' },
  { nama: 'Dormant', warna: '#94A3B8', x: 20, y: 20, size: 30, nasabah: 15770, deskripsi: 'Nasabah tidak aktif 90+ hari, saldo minimal, tidak ada transaksi digital.' },
];

export function ClusterMap() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Peta Cluster</h1>
        <p className="text-sm text-slate-500 mt-1">
          Use Case 1 · Customer Clustering · 7 cluster aktif · Diperbarui mingguan
        </p>
      </div>

      {/* Cluster scatter plot (simple CSS-based) */}
      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h2 className="font-semibold text-slate-900 mb-1">Peta cluster</h2>
        <p className="text-sm text-slate-500 mb-4">
          Posisi relatif berdasarkan nilai transaksi (sumbu X) dan engagement digital (sumbu Y)
        </p>
        <div className="relative w-full h-80 bg-slate-50 rounded-lg border border-slate-100">
          {/* Axis labels */}
          <span className="absolute bottom-2 right-4 text-xs text-slate-400">Nilai transaksi →</span>
          <span className="absolute top-2 left-4 text-xs text-slate-400">↑ Engagement digital</span>

          {/* Cluster bubbles */}
          {clusters.map((c) => (
            <div
              key={c.nama}
              className="absolute flex items-center justify-center rounded-full text-white text-[10px] font-medium text-center leading-tight p-1 cursor-default"
              style={{
                left: `${c.x}%`,
                top: `${100 - c.y}%`,
                width: `${c.size}px`,
                height: `${c.size}px`,
                backgroundColor: c.warna,
                transform: 'translate(-50%, -50%)',
                opacity: 0.85,
              }}
              title={`${c.nama}: ${c.nasabah.toLocaleString()} nasabah`}
            >
              {c.nama.split(' ').slice(0, 2).join('\n')}
            </div>
          ))}
        </div>
      </div>

      {/* Persona cards */}
      <div>
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Persona setiap cluster</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clusters.map((c) => (
            <div key={c.nama} className="bg-white rounded-xl border border-slate-200 p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: c.warna }}></div>
                <h3 className="font-semibold text-slate-900">{c.nama}</h3>
              </div>
              <p className="text-sm text-slate-600 mb-3">{c.deskripsi}</p>
              <p className="text-sm text-slate-400">{c.nasabah.toLocaleString()} nasabah</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
