import { useModals } from '@/src/context/ModalsProvider';
import { useItems } from '@/src/context/ItemsProvider';
import ModalTemplate from './ModalTemplate';

export default function DefeatModal() {
  const { showDefeat, toggleShowDefeat } = useModals()
  const { answer, guesses, resetGame } = useItems()

  function newGame() {
    toggleShowDefeat(false)
    setTimeout(() => {
      resetGame()
    }, 500)
  }

  return (
    <ModalTemplate
      showModal={showDefeat}
      closeModal={() => toggleShowDefeat(false)}
      title='DEFEAT'
      button={{
        onClick: newGame, 
        text: 'New Game'
      }}
    >
      <p className='text-xl text-center'>
        <span>You failed to guess</span>
        <span className={`text-${answer?.quality}`}> {`[${answer?.name}]`} </span>
        <span>
          <span>and surrendered after</span>
          <span className={`text-${answer?.quality}`}> {guesses.length} </span>
          <span>{ guesses.length === 1 ? 'guess' : 'guesses'}...</span>
        </span>
      </p>
    </ModalTemplate>
  )
}