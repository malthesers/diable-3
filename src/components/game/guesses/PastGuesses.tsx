import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useItems } from '@/src/context/ItemsProvider'
import { ItemRef } from '@/src/interfaces/ItemRef'
import { createRef } from 'react'
import ItemGuess from './ItemGuess'

export default function PastGuesses() {
  const { guesses, search } = useItems()

  const guessesRef:ItemRef[] = guesses.map((item) => {
    return {
      ...item,
      ref: createRef()
    }
  })

  return (
    <TransitionGroup className={(1 < search.length ? 'brightness-50 ' : '') + 'flex flex-col gap-2 min-h-[400px] sm:min-h-min duration-200'}>
      { guessesRef.map((item) =>
        <CSSTransition
          key={item.name}
          timeout={1000}
          classNames='guess'
          nodeRef={item.ref}
        >
          <div ref={item.ref}>
            <ItemGuess key={item.name} item={item}/>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  )
}