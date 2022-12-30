import * as React from 'react';
import Modal from '@mui/material/Modal';

interface IModalCardProps {
  open: boolean;
  handleClose: () => void;
}

function ModalCard({ open, handleClose }: IModalCardProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div />
    </Modal>
  );
}

export default ModalCard;
