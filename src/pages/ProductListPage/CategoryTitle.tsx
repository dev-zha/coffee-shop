import Title3 from '@/components/shared/typo/Title3';

interface CategoryTitleProps {
  children: string;
}

export default function CategoryTitle({ children }: CategoryTitleProps) {
  return <Title3 className="mb-3">{children}</Title3>;
}
