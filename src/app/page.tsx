'use client'

import PastGuesses from '@/src/components/game/guesses/PastGuesses'
import ItemSearch from '@/src/components/game/search/ItemSearch'
import ItemBox from '@/src/components/game/known/ItemBox'
import Button from '@/src/components/layout/Button'
import { useItems } from './items-provider'

export default function Home() {
  const { answer, known, resetGame } = useItems()

  return (
    <main>
      <section className='max-w-[400px] sm:max-w-[430px] md:max-w-[920px] lg:max-w-none mx-auto flex flex-row gap-2 mb-2 px-2 lg:px-3'>
        <Button onClick={resetGame} text='New Game'/>
      </section>
      <section className='grid md:grid-cols-2'>
        <div className='h-fit grid gap-2'>
          <ItemBox item={known}/>
          { answer && <ItemBox item={answer}/> }
        </div>
        <div className='flex flex-col place-items-center p-1 border-2 border-transparent'>
          <ItemSearch/>
          <PastGuesses/>
        </div>
      </section>
    </main>
  )
}
