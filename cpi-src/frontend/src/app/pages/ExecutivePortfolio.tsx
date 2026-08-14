export function ExecutivePortfolio() {
  return (
    <div className="p-6 space-y-6 h-[calc(100vh-10px)] flex flex-col">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Test Integrasi Panopticon</h1>
        <p className="text-sm text-slate-500 mt-1">
          Mencoba menampilkan dashboard visualisasi Panopticon dari server AIHub
        </p>
      </div>

      {/* Container Iframe */}
      <div className="flex-1 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm min-h-[550px]">
        <iframe
          src="https://aihub.bprks.local/panopticon/workbook/#/training/Dashboards%20Plafond%20DPD"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          title="Panopticon Test Integration"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
