import { HeroIcon } from '@/types';

interface DataCardProps {
  label: string;
  value: number;
  Icon: HeroIcon;
}

export default function DataCard({ label, value, Icon }: DataCardProps) {
  return (
    <div className="flex items-center gap-4 w-full bg-gray-50 text-center rounded-2xl p-4">
      <div className="w-12 h-12 bg-primary-100 text-primary rounded-full p-3">
        <Icon />
      </div>
      <div className="text-left">
        <span className="block text-gray-400 text-xs font-medium">{label}</span>
        <span className="block text-primary text-xl font-bold">{value.toLocaleString()}</span>
      </div>
    </div>
  );
}
