import InstructionsModal from './InstructionsModal';
import VictoryModal from './VictoryModal';
import DefeatModal from './DefeatModal';
import { createPortal } from 'react-dom';

export default function ModalsContainer() {
  return (
    <>
      {createPortal(
        <>
          <DefeatModal/>
          <VictoryModal/>
          <InstructionsModal/>
        </>,
        document.body
      )}
    </>
  )
}