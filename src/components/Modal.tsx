import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = {
  children: ReactNode
  onClose: () => void
}

const Modal = ({ onClose, children }: ModalProps) => {
  return createPortal(
    <dialog id='modal' open>
      {children}
      <p id='modal-actions'>
        <button onClick={onClose}>Close</button>
      </p>
    </dialog>,
    document.getElementById('modal-root') as HTMLElement
  )
}

export default Modal
