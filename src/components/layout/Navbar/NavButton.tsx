import { Link } from 'react-router-dom';
import { HeroIcon } from '@/types';

interface NavButtonProps {
  Icon: HeroIcon;
  link?: string;
  onClick?: () => void;
}

export default function NavButton({ Icon, link, onClick }: NavButtonProps) {
  const className =
    'hover:bg-primary-50 text-black hover:text-primary-600 rounded-full p-2 ease-in';

  const RenderIcon = () => <Icon className="w-6 h-6" />;

  if (link) {
    return (
      <Link to={link} className={className}>
        <RenderIcon />
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={className}>
      <RenderIcon />
    </button>
  );
}
