import InstructionsModal from './InstructionsModal';
import QualitiesModal from './QualitiesModal';
import VictoryModal from './VictoryModal';
import DefeatModal from './DefeatModal';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react'

export default function ModalsContainer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted ? 
      createPortal(
        <>
          <DefeatModal/>
          <VictoryModal/>
          <QualitiesModal/>
          <InstructionsModal/>
        </>,
        document.body
      ) : null
  )
}