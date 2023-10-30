import { useModals } from '@/src/context/ModalsProvider';
import { useItems } from '@/src/context/ItemsProvider';
import ModalTemplate from './ModalTemplate';

export default function QualitiesModal() {
  const { showQualities, toggleShowQualities } = useModals()

  return (
    <ModalTemplate
      showModal={showQualities}
      closeModal={() => toggleShowQualities(false)}
      title='Qualities'
    >
      <p className='text-xl text-center'>Below you can toggle item qualities, dictating which items will be <span className='text-set'>included</span> and <span className='text-undefined'>excluded</span> in the list of possible answers.</p>
    </ModalTemplate>
  )
}