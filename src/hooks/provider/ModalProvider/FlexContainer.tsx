interface FlexContainerProps {
  children: React.ReactNode;
}

export default function FlexContainer({ children }: FlexContainerProps) {
  return <div className="flex flex-col w-full h-full">{children}</div>;
}
