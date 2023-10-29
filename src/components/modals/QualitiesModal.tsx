import { useModals } from '@/src/context/ModalsProvider';
import { useItems } from '@/src/context/ItemsProvider';
import ModalTemplate from './ModalTemplate';

export default function QualitiesModal() {
  const { showQualities, toggleShowQualities } = useModals()

  return (
    <ModalTemplate
      showModal={showQualities}
      closeModal={() => toggleShowQualities(false)}
      title='QUALITIES'
    >
      <p className='text-xl text-center'>
      </p>
    </ModalTemplate>
  )
}