import { CSSTransition } from 'react-transition-group';
import { ReactNode, useEffect, useRef } from 'react';
import Button from '../layout/Button';

interface ModalProps {
  closeModal: () => void,
  showModal: boolean,
  children: ReactNode,
  title: string,
  button?: {
    onClick: () => void,
    disabled?: boolean,
    text: string
  }
}

export default function ModalTemplate({ closeModal, showModal, children, title, button }: ModalProps) {
  const modal = useRef<HTMLElement>(null)

  // Focus modals when opened to allow proceeding with keyboard
  useEffect(() => {
    if (modal.current && showModal) modal.current.focus()
  }, [showModal])
  
  return (
    <CSSTransition
      nodeRef={modal}
      in={showModal}
      timeout={500}
      classNames='fade'
      unmountOnExit
    >
      <aside ref={modal} tabIndex={0} className='fixed z-50 top-0 w-full h-[100dvh] grid p-4'>
        <div onClick={() => closeModal()} className='absolute -z-10 w-full h-full bg-black bg-opacity-50 cursor-pointer'></div>
        <div className='max-w-xl w-full max-h-[80%] overflow-scroll grid m-auto bg-undefined-gradient bg-center bg-contain border-bronze border-2'>
          <div className='grid-center w-full h-full bg-black bg-opacity-70'></div>
          <div className={(title === 'Records' ? 'py-4 sm:p-4' : 'p-4') + ' grid-center text-white shadow-guess-inner'}>
            <p className={(title === 'Records' ? 'px-4' : '') + ' text-2xl text-center uppercase mb-2'}>{title}</p>
            <>{children}</>
            <div className='flex flex-wrap place-content-center gap-4 mt-4'>
              { button && <Button onClick={button.onClick} disabled={button.disabled} text={button.text}/>}
              <Button onClick={() => closeModal()} text='Close'/>
            </div>
          </div>
        </div>
      </aside>
    </CSSTransition>
  )
}