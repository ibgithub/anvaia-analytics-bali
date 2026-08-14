import { useI18n } from '../i18n';

interface PlaceholderPageProps {
  menuKey: string;
}

export function PlaceholderPage({ menuKey }: PlaceholderPageProps) {
  const { t } = useI18n();
  const title = (t as any)[menuKey] || menuKey;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-4">{title}</h1>
      <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
        <p className="text-slate-400 text-lg">
          Halaman <span className="font-medium text-slate-600">{title}</span> sedang dalam pengembangan.
        </p>
      </div>
    </div>
  );
}
