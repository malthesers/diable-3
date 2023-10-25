import { useModals } from '@/src/context/ModalsProvider';
import { useItems } from '@/src/context/ItemsProvider';
import ModalTemplate from './ModalTemplate';

export default function InstructionsModal() {
  const { showInstructions, toggleShowInstructions } = useModals()
  const { answer, guesses } = useItems()

  return (
    <ModalTemplate showModal={showInstructions} closeModal={() => toggleShowInstructions(false)} title='Instructions'>
      <p className='text-xl text-center'>
        <span>yoyoyoyoyo</span>
      </p>
    </ModalTemplate>
  )
}