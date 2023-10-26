import InstructionsModal from './InstructionsModal';
import VictoryModal from './VictoryModal';
import { createPortal } from 'react-dom';

export default function ModalsContainer() {
  const body = document.querySelector('body')

  return (
    <>
      {createPortal(
        <>
          <VictoryModal/>
          <InstructionsModal/>
        </>,
        document.body
      )}
    </>
  )
}