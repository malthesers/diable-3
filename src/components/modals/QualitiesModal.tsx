import { ChosenQualities } from '@/src/interfaces/ChosenQualities';
import { useModals } from '@/src/context/ModalsProvider';
import { useItems } from '@/src/context/ItemsProvider';
import { useEffect, useRef } from 'react';
import ModalTemplate from './ModalTemplate';
import useToggle from '@/src/hooks/useToggle';

export default function QualitiesModal() {
  const { showQualities, toggleShowQualities } = useModals()
  const { chosen, toggleChosen, resetGame } = useItems()
  const [showError, setShowError] = useToggle(false)
  const startChosen = useRef<ChosenQualities>({...chosen})

  function closeModal() {
    const noChosen = Object.values(chosen).filter(quality => quality).length === 0 ? true : false
    
    if (noChosen) {
      setShowError(true)
    } else {
      setShowError(false)
      toggleShowQualities(false)
      // Only reset game save chosen qualities if any changes
      if (JSON.stringify(startChosen.current) !== JSON.stringify(chosen)) {
        localStorage.setItem('qualities', JSON.stringify(chosen))
        resetGame()
      }
    }
  }

  // Set chosen qualities on opening of modal
  useEffect(() => {
    if (showQualities) {
      startChosen.current = {...chosen}
    }
  }, [showQualities])

  return (
    <ModalTemplate
      showModal={showQualities}
      closeModal={() => closeModal()}
      title='Qualities'
    >
      <p className='text-base md:text-xl text-center text-pretty'>Below you can toggle item qualities, dictating which items will be <span className='text-green-600'>included</span> and <span className='text-red-800'>excluded</span> in the list of possible answers.</p>
      <p className='text-base md:text-xl text-center text-pretty mt-2'>Closing the pop-up will start a new game if any changes to qualities were made.</p>
      <p className={(showError ? 'text-red-500 animate-pulse' : '') + ' text-base md:text-xl text-center mt-2 duration-300'}>At least 1 quality must be chosen.</p>
      <div className='grid 2xs:grid-cols-2 sm:grid-cols-3 gap-2 xs:gap-4 mt-2 mb-4'>
        { Object.entries(chosen).map(([quality, active]) => 
          <button onClick={() => toggleChosen(quality as keyof typeof chosen)} key={quality} className='grid bg-undefined-gradient shadow-item-inner outline-none duration-200 hover:shadow-quality-inner focus-visible:shadow-quality-inner'>
            <div className={(active ? 'bg-green-600' : 'bg-red-800') + ' h-full bg-opacity-40 grid-center duration-300'}></div>
            <p className='text-sm sm:text-base uppercase p-2 xs:p-4 grid-center'>{quality}</p>
          </button>
        )}
      </div>
    </ModalTemplate>
  )
}