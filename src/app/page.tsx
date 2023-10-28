'use client'

import PastGuesses from '@/src/components/game/guesses/PastGuesses'
import ModalsContainer from '../components/modals/ModalsContainer'
import ItemSearch from '@/src/components/game/search/ItemSearch'
import ItemBox from '@/src/components/game/known/ItemBox'
import Button from '@/src/components/layout/Button'
import { useModals } from '../context/ModalsProvider'
import { useItems } from '../context/ItemsProvider'

export default function Home() {
  const { answer, known, resetGame, surrenderGame } = useItems()
  const { toggleShowInstructions } = useModals()
  const wasGuessed = answer?.name === known.name

  return (
    <main>
      <section className='max-w-[920px] lg:max-w-none mx-auto flex flex-row flex-wrap place-content-center md:place-content-start gap-2 mb-2'>
        <Button onClick={resetGame} text='New Game'/>
        <Button onClick={surrenderGame} text='Surrender' className={wasGuessed ? ' brightness-50 pointer-events-none' : ''}/>
        <Button onClick={() => toggleShowInstructions(true)} text='How To'/>
      </section>
      <section className='grid md:grid-cols-2 gap-4'>
        <div className='h-fit grid gap-2'>
          <ItemBox item={known}/>
          {/* { answer && <ItemBox item={answer}/> } */}
          { answer && <p className='text-center'>{answer.name}</p>}
        </div>
        <div className='flex flex-col place-items-center p-1 border-2 border-transparent'>
          <ItemSearch/>
          <PastGuesses/>
        </div>
      </section>
      <ModalsContainer/>
    </main>
  )
}
