import { useItems } from '@/src/context/ItemsProvider'
import { forwardRef } from 'react'

const SearchBar = forwardRef<HTMLInputElement>(function SearchBar(props, ref) {
  const { guessed, search, setSearch } = useItems()

  return (
    <label
      htmlFor='item-search'
      className={(guessed ? 'brightness-50 ' : '') + 'nameplate bg-undefined-name bg-no-repeat bg-cover bg-center aspect-[350/40] grid duration-200'}
    >
      <input
        ref={ref}
        value={search}
        disabled={guessed}
        onChange={e => setSearch(e.target.value)}
        id='item-search'
        autoComplete='off'
        placeholder={ guessed ? 'Item was guessed' : 'Enter item name...'}
        className='bg-transparent text-center text-sm/4 sm:text-base/4 md:text-lg/4 uppercase focus:outline-none'
      ></input>
    </label>
  )
})

export default SearchBar