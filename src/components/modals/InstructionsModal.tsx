import { useModals } from '@/src/context/ModalsProvider';
import ModalTemplate from './ModalTemplate';

export default function InstructionsModal() {
  const { showInstructions, toggleShowInstructions } = useModals()

  return (
    <ModalTemplate showModal={showInstructions} closeModal={() => toggleShowInstructions(false)} title='Instructions'>
      <div className='text-lg sm:text-xl text-center space-y-2'>
        <p>Search for an item and enter your guess.</p>
        <p>View guess to find correct and incorrect properties.</p>
        <p>A <span className='text-green-600'>green</span> background indicates a correct property, and a <span className='text-red-600'>red</span> background indicates an incorrect property.</p>
        <p>Additionally revealed properties appear in the item tooltip.</p>
        <p>Narrow down the possibilities until you find the right item!</p>
      </div>
    </ModalTemplate>
  )
}