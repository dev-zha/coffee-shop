interface AddressCardProps {
  children: React.ReactNode;
}

export default function AddressCard({ children }: AddressCardProps) {
  return (
    <div className="w-full h-32 bg-[url('/images/google-maps-vecotr.png')] bg-cover rounded-2xl overflow-hidden">
      <div className="w-full h-full bg-gradient-to-t from-primary-300">
        {children}
      </div>
    </div>
  );
}
