import InstructionsModal from './InstructionsModal';
import VictoryModal from './VictoryModal';
import { createPortal } from 'react-dom';

export default function ModalsContainer() {
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