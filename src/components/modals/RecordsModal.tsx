import { useModals } from '@/src/context/ModalsProvider';
import { ItemRecord } from '@/src/interfaces/ItemRecord';
import ModalTemplate from './ModalTemplate';
import RecordItem from '../game/records/RecordItem';

export default function RecordsModal() {
  const { showRecords, toggleShowRecords } = useModals()

  const records:ItemRecord[] = [
    {
      id: 1,
      name: 'Dawn',
      class: 'demon hunter',
      quality: 'legendary',
      equipment: {
        slot: '1-hand',
        type: 'hand crossbow'
      },
      legendaryPower: 'Reduce the cooldown of Vengeance by [50 - 65%].',
      elementalDamage: 'holy',
      guesses: 999,
      chosen: {
        common: true,
        magic: true,
        rare: true,
        legendary: true,
        set: true,
        ethereal: true
      }
    },
    {
      id: 2,
      name: 'Thunderfury, Blessed Blade of the Windseeker',
      class: 'demon hunter',
      quality: 'ethereal',
      equipment: {
        slot: '1-hand',
        type: 'hand crossbow'
      },
      guesses: 1,
      chosen: {
        common: false,
        magic: false,
        rare: false,
        legendary: true,
        set: true,
        ethereal: true
      }
    },
  ]

  return (
    <ModalTemplate showModal={showRecords} closeModal={() => toggleShowRecords(false)} title='Records'>
      <div className='text-base sm:text-xl text-center space-y-2'>
        <p>Below is a list of your fastest victories including the guessed item, the amount of guesses and the included qualities.</p>
        <div className='grid gap-2'>
          { records.map(record =>
            <RecordItem key={record.id} record={record}/>
          )}
        </div>
      </div>
    </ModalTemplate>
  )
}