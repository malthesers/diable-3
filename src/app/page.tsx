'use client'

import PastGuesses from '../components/game/PastGuesses'
import ItemSearch from '../components/game/ItemSearch'
import ItemBox from '../components/game/ItemBox'
import { useItems } from './items-provider'

export default function Home() {
  const { answer, known } = useItems()

  return (
    <main>
      <section className='grid lg:grid-cols-2 gap-4'>
        <div className='h-fit grid gap-2'>
          <ItemBox item={known}/>
          { answer && <ItemBox item={answer}/> }
        </div>
        <div>
          <ItemSearch />
          <PastGuesses/>
        </div>
      </section>
    </main>
  )
}
