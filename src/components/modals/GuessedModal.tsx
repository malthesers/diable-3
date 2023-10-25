import Button from "../layout/Button";

interface GuessedModalProps {
  closeModal: () => void
}

export default function GuessedModal({ closeModal }: GuessedModalProps) {
  return (
    <aside className='fixed top-0 w-full h-[100dvh] bg-black bg-opacity-20 grid p-4'>
      <div className="max-w-xl w-full grid m-auto bg-undefined-icon bg-center border-bronze border-2">
        <div className="grid-center w-full h-full bg-black bg-opacity-70"></div>
        <div className="grid-center p-4 text-white">
          <p className="text-2xl text-center">Item was guessed!</p>
          <p>Lorem ipsum dolor sit amet</p>
          <div className="grid place-content-center mt-4">
            <Button onClick={() => closeModal()} text="Close"/>
          </div>
        </div>
      </div>
    </aside>
  )
}