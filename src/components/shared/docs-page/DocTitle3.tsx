import Title3 from '../typo/Title3';

interface DocTitle3Props {
  children: string;
}

export default function DocTitle3({ children }: DocTitle3Props) {
  return <Title3 className="text-gray-600 mt-3 mb-2">{children}</Title3>;
}
