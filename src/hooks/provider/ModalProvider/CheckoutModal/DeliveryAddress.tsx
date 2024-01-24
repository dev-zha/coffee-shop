import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { useUserAddress } from '@/hooks/useUserAddress';
import { useModal } from '@/hooks/useModal';
import Title6 from '@/components/shared/typo/Title6';
import MapNonInteractive from '@/components/shared/MapNonInteractive';
import AddressCard from '@/components/shared/AddressCard';

export default function DeliveryAddress() {
  // Address
  const { address } = useUserAddress();
  // Modal
  const { showAddressModal } = useModal();

  return (
    <div>
      <Title6 className="mb-3">Delivery Address</Title6>
      {address?.fullAddress ? (
        <div>
          <div className="w-full h-32 bg-gray-200 rounded-2xl overflow-hidden">
            <MapNonInteractive />
          </div>
          <div className="flex items-start justify-between mt-1">
            <span className="text-gray-800 font-medium line-clamp-2">
              {address?.fullAddress}
            </span>
            <button
              type="button"
              onClick={showAddressModal}
              className="text-primary bg-gray-100 hover:bg-gray-200 focus:outline-none rounded-full text-sm p-1.5 inline-flex items-center"
            >
              <PencilSquareIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <AddressCard>
          <div className="h-full flex flex-col items-center justify-center">
            <button
              onClick={showAddressModal}
              className="font-semibold text-white underline underline-offset-4"
            >
              Add Your Location
            </button>
          </div>
        </AddressCard>
      )}
    </div>
  );
}
