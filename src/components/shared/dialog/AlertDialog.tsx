import ModalDialog from './ModalDialog';

export interface AlertDialogData {
  title: string;
  bodyText?: string;
}

interface AlertDialogProps {
  show: boolean;
  onClose: () => void;
  title: string;
  bodyText?: string;
}

export default function AlertDialog({
  show,
  onClose,
  title,
  bodyText,
}: AlertDialogProps) {
  const handleModalClose = () => {
    onClose();
  };
  return (
    <ModalDialog
      show={show}
      title={title}
      onClose={handleModalClose}
      rigthBtn={{
        title: 'OK',
        onClick: () => {
          onClose();
        },
      }}
    >
      <p>{bodyText}</p>
    </ModalDialog>
  );
}
