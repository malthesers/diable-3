import Image from 'next/image'
import Bullet from '@/public/images/legendary-bullet.png'
import { SwitchTransition, CSSTransition} from 'react-transition-group'
import { useItems } from '@/src/context/ItemsProvider'
import { useRef } from 'react'

export default function LegendaryPower({ power }: { power: string | undefined }) {
  const { answer, known, guesses } = useItems()
  const wasGuessed = answer?.name === known.name
  const showHint = guesses.length < 1
  const ref = useRef<HTMLDivElement>(null)
  
  let powerMan = power

  if (showHint && !wasGuessed) {
    powerMan = ''
  }

  return (
    <SwitchTransition mode='out-in'>
      <CSSTransition
        classNames='fade'
        key={powerMan}
        nodeRef={ref}
        addEndListener={(done: () => void) =>
          ref.current?.addEventListener('transitionend', done, false)
        }
      >
        <div ref={ref}>
          <p className={(wasGuessed ? 'blur-none' : 'blur-sm hover:blur-none') + ' duration-200'}>
            { powerMan && <Image
              src={Bullet}
              alt='Legendary power bullet'
              className='inline-block w-4 h-4 mb-1 mr-1'
            />}
            <span className='text-legendary normal-case'>{powerMan}</span>
          </p>
        </div>
      </CSSTransition>
    </SwitchTransition>
  )
}