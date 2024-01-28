import { HeroIcon } from '@/types';
import { Link } from 'react-router-dom';

interface MenuItemProps {
  title: string;
  Icon: HeroIcon;
  link?: string;
  onClick: () => void;
}

export default function MenuItem({
  title,
  Icon,
  link,
  onClick,
}: MenuItemProps) {
  const RenderComponent = link ? Link : 'button';

  return (
    <li>
      <RenderComponent
        to={link || ''}
        onClick={onClick}
        className="group flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
      >
        <Icon className="w-5 h-5 text-primary transition duration-75 group-hover:text-primary-700" />
        <span className="ms-3">{title}</span>
      </RenderComponent>
    </li>
  );
}
