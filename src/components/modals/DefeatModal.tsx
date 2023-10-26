import { useModals } from '@/src/context/ModalsProvider';
import { useItems } from '@/src/context/ItemsProvider';
import ModalTemplate from './ModalTemplate';

export default function DefeatModal() {
  const { showDefeat, toggleShowDefeat } = useModals()
  const { resetGame } = useItems()

  function newGame() {
    setTimeout(() => {
      resetGame()
    }, 500)
  }

  return (
    <ModalTemplate
      showModal={showDefeat}
      closeModal={() => toggleShowDefeat(false)}
      title='You were defeated...'
      button={{
        onClick: newGame, 
        text: 'New Game'
      }}
    >
      <p className='text-xl text-center'>
        
      </p>
    </ModalTemplate>
  )
}