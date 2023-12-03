import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useRecords } from '@/src/context/RecordsProvider';
import { useModals } from '@/src/context/ModalsProvider';
import { useRef } from 'react';
import RecordItem from '../game/records/RecordItem';
import ModalTemplate from './ModalTemplate';

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
        className: records.length === 0 ? 'pointer-events-none brightness-50' : '',
        disabled: records.length === 0,
        text: 'Clear'
      }}
    >
      <div className='text-base sm:text-xl text-center'>
        <p className='px-4'>Below is a list of your fastest wins including the guessed item, the amount of guesses and the included qualities.</p>
        <p className={(records.length === 0 ? 'opacity-100 max-h-6' : 'opacity-0 max-h-0') + ' mt-3 duration-200 delay-1000'}>No records yet...</p>
        <SwitchTransition mode='out-in'>
          <CSSTransition
            classNames='records'
            nodeRef={recordsNode}
            key={displayRecords}
            addEndListener={(done) =>
              recordsNode.current?.addEventListener('transitionend', done, false)
            }
          >
            <div ref={recordsNode} className='grid grid-rows-[1fr] gap-2'>
              <div className='overflow-hidden grid gap-2'>
                {records.length !== 0 && records.map(record =>
                  <RecordItem key={record.timestamp} record={record}/>
                )} 
              </div>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </ModalTemplate>
  )
}