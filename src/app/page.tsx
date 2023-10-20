'use client'

import PastGuesses from '../components/game/PastGuesses'
import ItemSearch from '../components/game/ItemSearch'
import ItemBox from '../components/game/ItemBox'
import { useItems } from './items-provider'

export default function Home() {
  const { answer, known, resetGame } = useItems()

  return (
    <main>
      <section className='w-[315px] sm:w-[350px] md:w-full mx-auto flex flex-row gap-4 mb-2 md:px-2'>
        <button onClick={resetGame} className='py-2 px-4 border-2 border-white'>New Game</button>
      </section>
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
