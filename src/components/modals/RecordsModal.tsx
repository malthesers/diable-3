import { useModals } from '@/src/context/ModalsProvider';
import ModalTemplate from './ModalTemplate';

export default function RecordsModal() {
  const { showRecords, toggleShowRecords } = useModals()

  return (
    <ModalTemplate showModal={showRecords} closeModal={() => toggleShowRecords(false)} title='Records'>
      <div className='text-lg sm:text-xl text-center space-y-2'>
      </div>
    </ModalTemplate>
  )
}