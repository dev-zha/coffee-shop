interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className=" text-gray-700 rounded-xl border border-primary-200 p-4 sm:p-8 my-2 sm:my-8 mx-2 lg:mx-0">
      {children}
    </div>
  );
}
