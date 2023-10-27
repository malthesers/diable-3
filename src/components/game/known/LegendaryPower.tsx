import Image from 'next/image'
import Bullet from '@/public/images/legendary-bullet.png'
import { CSSTransition } from 'react-transition-group'
import { useItems } from '@/src/context/ItemsProvider'
import { useRef } from 'react'

export default function LegendaryPower({ power }: { power: string | undefined }) {
  const { answer, known, guesses } = useItems()
  const wasGuessed = answer?.name === known.name
  const showHint = guesses.length > 3
  const powerRef = useRef(null)

  return (
    <CSSTransition
      nodeRef={powerRef}
      in={showHint}
      timeout={500}
      classNames='fade'
      unmountOnExit
    >
      <div ref={powerRef}>
        { (power !== undefined)
          ? <p className={(wasGuessed ? 'blur-none' : 'blur-sm hover:blur-none') + ' duration-200'}>
              <Image
                src={Bullet}
                alt='Legendary power bullet'
                className='inline-block w-4 h-4 mb-1 mr-1'
              />
              <span className='text-legendary normal-case'>{power}</span>
            </p>
          : <p className='text-undefined normal-case'>No legendary power</p>
        }
      </div>
    </CSSTransition>
  )
}