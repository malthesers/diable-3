import { Item } from '@/src/interfaces/Item'
import ItemNameplate from '../ItemNameplate'

interface ItemSearchProps {
  submitGuess: (item:Item) => void,
  focusInput: () => void,
  item: Item
}

export default function ItemSearch({ submitGuess, focusInput, item }: ItemSearchProps) {

  function keydownHandler(e: React.KeyboardEvent<HTMLElement>, item: Item) {
    if (e.key === 'Enter') submitGuess(item)
    if (e.key === 'Backspace') focusInput()
  }

  return (
    <article
      tabIndex={0}
      onClick={() => submitGuess(item)}
      onKeyDown={(e) => keydownHandler(e, item)}
      className='group focus-within:outline-none'
    >
      <ItemNameplate item={item} hover={true}/>
    </article>
  )
}