interface StickyModalFooterProps {
  children: React.ReactNode;
}

export default function StickyModalFooter({
  children,
}: StickyModalFooterProps) {
  return (
    <div className="sticky bottom-0 bg-white/75 backdrop-blur-sm border-t p-3">{children}</div>
  );
}
