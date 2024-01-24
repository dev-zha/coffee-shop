import ModalDialog from './ModalDialog';

interface ConfirmDialogProps {
  show: boolean;
  title: string;
  leftBtnClick: () => void;
  rightBtnClick: () => void;
  children?: React.ReactNode;
}

export default function ConfirmDialog({
  show,
  title,
  leftBtnClick,
  rightBtnClick,
  children,
}: ConfirmDialogProps) {
  return (
    <ModalDialog
      show={show}
      title={title}
      closable={false}
      onClose={() => {}}
      leftBtn={{
        title: 'Cancel',
        onClick: () => {
          leftBtnClick();
        },
      }}
      rigthBtn={{
        title: 'OK',
        onClick: () => {
          rightBtnClick();
        },
      }}
    >
      {children}
    </ModalDialog>
  );
}
