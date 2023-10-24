import { useItems } from '@/src/app/items-provider'
import { forwardRef } from 'react'

const SearchBar = forwardRef<HTMLInputElement>(function SearchBar(props, ref) {
  const { search, setSearch } = useItems()

  return (
    <label htmlFor='item-search' className='nameplate bg-undefined-name bg-no-repeat bg-cover bg-center aspect-[350/40] grid'>
      <input
        ref={ref}
        value={search}
        onChange={e => setSearch(e.target.value)}
        id='item-search'
        autoComplete='off'
        placeholder='Enter item name...'
        className='bg-transparent text-center uppercase focus:outline-none'
      ></input>
    </label>
  )
})

export default SearchBar