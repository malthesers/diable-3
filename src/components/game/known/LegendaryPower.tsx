import Image from 'next/image'
import Bullet from '@/public/images/legendary-bullet.png'
import { SwitchTransition, CSSTransition} from 'react-transition-group'
import { useItems } from '@/src/context/ItemsProvider'
import { useRef } from 'react'

export default function LegendaryPower({ power }: { power: string | undefined }) {
  const { guessed, answer, known, guesses } = useItems()
  const ref = useRef<HTMLDivElement>(null)
  const legendaryPower = (guesses.length < 9 && !guessed) ? '' : power
  
  return (
    <SwitchTransition mode='out-in'>
      <CSSTransition
        classNames='fade'
        key={legendaryPower}
        nodeRef={ref}
        addEndListener={(done: () => void) =>
          ref.current?.addEventListener('transitionend', done, false)
        }
      >
        <div ref={ref}>
          <p className={(guessed ? 'blur-none' : 'blur-sm hover:blur-none') + ' duration-200'}>
            { legendaryPower &&
              <Image
                src={Bullet}
                alt='Legendary power bullet'
                className='inline-block w-4 h-4 mb-1 mr-1'
              />
            }
            <span className='text-legendary normal-case'>
              <span>{legendaryPower?.substring(0, legendaryPower.indexOf('['))}</span>
              <span className='text-magic-accent'>{legendaryPower?.substring(legendaryPower.indexOf('['), legendaryPower.indexOf(']') + 1)}</span>
              <span>{legendaryPower?.substring(legendaryPower.indexOf(']') + 1)}</span>
            </span>
          </p>
        </div>
      </CSSTransition>
    </SwitchTransition>
  )
}