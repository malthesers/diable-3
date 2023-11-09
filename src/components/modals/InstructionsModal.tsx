import { useModals } from '@/src/context/ModalsProvider';
import ModalTemplate from './ModalTemplate';

export default function InstructionsModal() {
  const { showInstructions, toggleShowInstructions } = useModals()

  return (
    <ModalTemplate showModal={showInstructions} closeModal={() => toggleShowInstructions(false)} title='Instructions'>
      <div className='text-lg sm:text-xl text-center space-y-2'>
        <p>Search for an item and enter your guess. View your guess to find correct and incorrect properties.</p>
        <p>A <span className='font-semibold text-green-600'>green</span> background indicates a correct value, and a <span className='font-semibold text-red-600'>red</span> background indicates an incorrect value.</p>
        <p>Revealed properties appear in the item tooltip. After 10 guesses, a blurred <span className='font-semibold text-legendary'>legendary power</span> will also appear, and be revealed on hover.</p>
        <p><span className='font-semibold'>Common</span> and <span className='font-semibold text-magic'>magic</span> items constitute only <span className='italic'>unique</span> items, e.g. transmog commons and Darkening of Tristram magic items.</p>
        <p><span className='font-semibold text-rare'>Rare</span> items constitute only the level 70 crafted items, while all <span className='font-semibold text-legendary'>legendary</span> and <span className='font-semibold text-set'>set</span> items are included.</p>
        <p>Item types of <span className='font-semibold text-ethereal'>ethereals</span> are treated as the closest D3 item types, e.g. <span className='italic'>bone knife</span> is treated as a <span className='italic'>dagger</span>.</p>
        <p>Narrow down the possibilities until you find the right item!</p>
      </div>
    </ModalTemplate>
  )
}