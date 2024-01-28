import Title1 from '../typo/Title1';

interface DocTitle1Props {
  children: string;
}

export default function DocTitle1({ children }: DocTitle1Props) {
  return <Title1 className="text-primary text-center mb-8">{children}</Title1>;
}
