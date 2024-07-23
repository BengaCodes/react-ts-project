import { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'
import Button from './Button'

type ModalProps = {
  children: ReactNode
  onClose: () => void
}

export type ModalHandler = {
  open: () => void
}

const Modal = forwardRef<ModalHandler, ModalProps>(
  ({ onClose, children }, ref) => {
    const dialog = useRef<HTMLDialogElement>(null)

    useImperativeHandle(ref, () => ({
      open: () => dialog?.current && dialog.current?.showModal()
    }))

    return createPortal(
      <dialog id='modal' className='modal' ref={dialog} onClose={onClose}>
        {children}
        <p id='modal-actions'>
          <Button onClick={onClose}>Close</Button>
        </p>
      </dialog>,
      document.getElementById('modal-root') as HTMLElement
    )
  }
)

export default Modal
