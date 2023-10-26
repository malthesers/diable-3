import Image from 'next/image'
import Bullet from '@/public/images/legendary-bullet.png'
import { CSSTransition } from 'react-transition-group'
import { useItems } from '@/src/context/ItemsProvider'
import { useRef } from 'react'

export default function Legend({ power }: { power: string }) {
  const { guesses } = useItems()
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
      <p ref={powerRef} className='duration-200 blur-sm hover:blur-none'>
        <Image
          src={Bullet}
          alt='Legendary power bullet'
          className='inline-block w-4 h-4 mb-1 mr-1'
        />
        <span className='text-legendary normal-case'>{power}</span>
      </p>
    </CSSTransition>
  )
}