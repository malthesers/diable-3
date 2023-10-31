import { useItems } from '@/src/context/ItemsProvider'
import { forwardRef } from 'react'

const SearchBar = forwardRef<HTMLInputElement>(function SearchBar(props, ref) {
  const { answer, known, search, setSearch } = useItems()
  const wasGuessed = answer?.name === known.name

  return (
    <label
      htmlFor='item-search'
      className={(wasGuessed ? 'brightness-50 ' : '') + 'nameplate bg-undefined-name bg-no-repeat bg-cover bg-center aspect-[350/40] grid duration-200'}
    >
      <input
        ref={ref}
        value={search}
        disabled={wasGuessed}
        onChange={e => setSearch(e.target.value)}
        id='item-search'
        autoComplete='off'
        placeholder={ wasGuessed ? 'Item was guessed' : 'Enter item name...'}
        className='bg-transparent text-center text-sm/4 sm:text-base/4 md:text-lg/4 uppercase focus:outline-none'
      ></input>
    </label>
  )
})

export default SearchBar