'use client'

import PastGuesses from '../components/game/guesses/PastGuesses'
import ItemSearch from '../components/game/ItemSearch'
import ItemBox from '../components/game/ItemBox'
import Button from '../components/layout/Button'
import { useItems } from './items-provider'

export default function Home() {
  const { answer, known, resetGame } = useItems()

  return (
    <main>
      <section className='mx-auto flex flex-row gap-4 mb-2 md:px-1'>
        <Button onClick={resetGame} text='New Game'/>
      </section>
      <section className='grid lg:grid-cols-2 gap-4'>
        <div className='h-fit grid gap-2'>
          <ItemBox item={known}/>
          { answer && <ItemBox item={answer}/> }
        </div>
        <div className='flex flex-col gap-2 place-items-center p-1 border-2 border-transparent'>
          <ItemSearch/>
          <PastGuesses/>
        </div>
      </section>
    </main>
  )
}
