import { Item } from '@/src/interfaces/Item'
import { useRef } from 'react'
import ItemNameplate from '../ItemNameplate'

interface ItemSearchProps {
  submitGuess: (item:Item) => void,
  item: Item
}

export default function ItemSearch({ submitGuess, item }: ItemSearchProps) {
  const node = useRef(null)

  return (
    <article
      ref={node}
      key={item.name} tabIndex={0}
      onClick={() => submitGuess(item)}
      onKeyDown={(e) => {if (e.key === 'Enter') submitGuess(item)}}
      className='group focus-within:outline-none'
    >
      <ItemNameplate item={item} hover={true}/>
    </article>
  )
}