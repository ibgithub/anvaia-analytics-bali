import { useI18n } from '../i18n';
import { Construction } from 'lucide-react';

interface PlaceholderPageProps {
  menuKey: string;
}

export function PlaceholderPage({ menuKey }: PlaceholderPageProps) {
  const { t, lang } = useI18n();
  const title = (t as any)[menuKey] || menuKey;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-slate-900 mb-4">{title}</h1>
      <div className="bg-white rounded-xl border border-slate-200 p-16 text-center">
        <Construction className="w-12 h-12 text-slate-300 mx-auto mb-4" />
        <p className="text-slate-500 text-lg font-medium mb-2">
          {lang === 'id' ? 'Dalam Pengembangan' : 'In Progress'}
        </p>
        <p className="text-slate-400 text-sm">
          {lang === 'id'
            ? `Halaman "${title}" sedang dikembangkan dan akan segera tersedia.`
            : `The "${title}" page is under development and will be available soon.`}
        </p>
      </div>
    </div>
  );
}
