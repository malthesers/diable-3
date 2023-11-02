import Image from 'next/image'
import Bullet from '@/public/images/legendary-bullet.png'
import { SwitchTransition, CSSTransition} from 'react-transition-group'
import { useItems } from '@/src/context/ItemsProvider'
import { useRef } from 'react'

export default function LegendaryPower({ power }: { power: string | undefined }) {
  const { answer, known, guesses } = useItems()
  const ref = useRef<HTMLDivElement>(null)
  const wasGuessed = answer?.name === known.name
  const legendaryPower = (guesses.length < 9 && !wasGuessed) ? '' : power
  const preVar = legendaryPower?.substring(0, legendaryPower.indexOf('['))
  const rangeVar = legendaryPower?.substring(legendaryPower.indexOf('['), legendaryPower.indexOf(']') + 1)
  const postVar = legendaryPower?.substring(legendaryPower.indexOf(']') + 1)

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
          <p className={(wasGuessed ? 'blur-none' : 'blur-sm hover:blur-none') + ' duration-200'}>
            { legendaryPower &&
              <Image
                src={Bullet}
                alt='Legendary power bullet'
                className='inline-block w-4 h-4 mb-1 mr-1'
              />
            }
            <span className='text-legendary normal-case'>
              {legendaryPower}
              {/* <span>{preVar}</span>
              <span className='text-magic-accent'>{rangeVar}</span>
              <span>{postVar}</span> */}
            </span>
          </p>
        </div>
      </CSSTransition>
    </SwitchTransition>
  )
}