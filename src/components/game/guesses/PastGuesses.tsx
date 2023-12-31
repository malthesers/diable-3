import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useItems } from '@/src/context/ItemsProvider'
import { Item } from '@/src/interfaces/Item'
import { createRef } from 'react'
import ItemGuess from './ItemGuess'

export default function PastGuesses() {
  const { guesses, search } = useItems()

  const guessesRef:Item[] = guesses.map((item) => {
    return {
      ...item,
      ref: createRef()
    }
  })

  return (
    <TransitionGroup className={(1 < search.length ? 'brightness-50 ' : '') + 'flex flex-col gap-2 min-h-[400px] sm:min-h-min duration-200'}>
      { guessesRef.map((item) =>
        <CSSTransition
          key={item.id}
          timeout={1000}
          classNames='guess'
          nodeRef={item.ref}
        >
          <div ref={item.ref}>
            <ItemGuess key={item.id} item={item}/>
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  )
}