import InstructionsModal from './InstructionsModal';
import QualitiesModal from './QualitiesModal';
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
          <QualitiesModal/>
          <InstructionsModal/>
        </>,
        document.body
      )}
    </>
  )
}