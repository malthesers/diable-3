'use client'

import PastGuesses from '../components/game/PastGuesses'
import ItemSearch from '../components/game/ItemSearch'
import ItemBox from '../components/game/ItemBox'
import Button from '../components/layout/Button'
import { useItems } from './items-provider'

export default function Home() {
  const { answer, known, resetGame } = useItems()

  return (
    <main>
      <section className='w-[315px] sm:w-[350px] md:w-[420px] lg:w-full mx-auto flex flex-row gap-4 mb-2'>
        <Button onClick={resetGame} text='New Game'/>
      </section>
      <section className='grid lg:grid-cols-2 gap-4'>
        <div className='h-fit grid gap-2'>
          <ItemBox item={known}/>
          { answer && <ItemBox item={answer}/> }
        </div>
        <div>
          <ItemSearch/>
          <PastGuesses/>
        </div>
      </section>
    </main>
  )
}
