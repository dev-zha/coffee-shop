import { Dialog } from '@headlessui/react';
import { classNames } from '@/utils/helper';
import BlankModal from './BlankModal';

interface BaseModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  fullScreen?: boolean;
}

export default function BaseModal({
  show,
  onClose,
  children,
  fullScreen = false,
}: BaseModalProps) {

  return (
    <BlankModal show={show} onClose={onClose}>
      <Dialog.Panel
        className={classNames(
          'w-full transform bg-gray-50 transition-all',
          fullScreen
            ? 'h-screen sm:max-w-md sm:h-[80vh] sm:rounded-3xl overflow-y-auto scrollbar-hide'
            : 'max-w-md overflow-hidden rounded-3xl mx-2'
        )}
      >
        {children}
      </Dialog.Panel>
    </BlankModal>
  );
}
