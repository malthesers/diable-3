import { useModals } from '@/src/context/ModalsProvider';
import ModalTemplate from './ModalTemplate';
import RecordItem from '../game/records/RecordItem';
import { useRecords } from '@/src/context/RecordsProvider';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useRef } from 'react';

export default function RecordsModal() {
  const { showRecords, toggleShowRecords } = useModals()
  const { records, clearRecords } = useRecords()
  const recordsNode = useRef<HTMLDivElement>(null)
  const displayRecords:string = records.length > 0 ? 'message' : 'records'

  return (
    <ModalTemplate
      showModal={showRecords}
      closeModal={() => toggleShowRecords(false)}
      title='Records'
      button={{
        onClick: clearRecords,
        text: 'Clear'
      }}
    >
      <div className='text-base sm:text-xl text-center space-y-2'>
        <p className='px-4'>Below is a list of your fastest victories including the guessed item, the amount of guesses and the included qualities.</p>
          
          <SwitchTransition mode='out-in'>
            <CSSTransition
              classNames='records'
              nodeRef={recordsNode}
              key={displayRecords}
              timeout={700}
              addEndListener={(done: () => void) =>
                recordsNode.current?.addEventListener('transitionend', done, false)
              }
            >
              <div ref={recordsNode} className='grid gap-2 pt-4 overflow-hidden'>
                {records.length === 0 && <p>No records yet...</p>}
                {records.length !== 0 && records.map(record =>
                  <RecordItem key={record.id} record={record}/>
                )} 
              </div>
            </CSSTransition>
          </SwitchTransition>
      </div>
    </ModalTemplate>
  )
}