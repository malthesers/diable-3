import { useModals } from '@/src/context/ModalsProvider';
import { useItems } from '@/src/context/ItemsProvider';
import ModalTemplate from './ModalTemplate';

export default function VictoryModal() {
  const { showVictory, toggleShowVictory } = useModals()
  const { answer, guesses } = useItems()

  return (
    <ModalTemplate showModal={showVictory} closeModal={() => toggleShowVictory(false)} title='Item was guessed!'>
      <p className='text-xl text-center'>
        <span>You succesfully guessed</span>
        <span className={`text-${answer?.quality}`}> {answer?.name} </span>
        <span>
          <span>in</span>
          <span className={`text-${answer?.quality}`}> {guesses.length} </span>
          <span>{ guesses.length === 1 ? 'guess' : 'guesses'}.</span>
        </span>
      </p>
    </ModalTemplate>
  )
}