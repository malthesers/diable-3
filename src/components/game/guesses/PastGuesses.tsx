import { useItems } from '@/src/context/ItemsProvider'
import ItemGuess from './ItemGuess'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default function PastGuesses() {
  const { guesses, search } = useItems()

  return (
    <TransitionGroup className={(1 < search.length ? 'brightness-50 ' : '') + 'flex flex-col gap-2 min-h-[400px] sm:min-h-min duration-200'}>
      { guesses.map((item) =>
        <CSSTransition
          key={item.name}
          timeout={500}
          classNames='fade'
        >
          <ItemGuess key={item.name} item={item}/>
        </CSSTransition>
      )}
    </TransitionGroup>
  )
}