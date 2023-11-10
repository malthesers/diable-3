'use client'

import SearchContainer from '@/src/components/game/search/SearchContainer'
import ModalsContainer from '../components/modals/ModalsContainer'
import PastGuesses from '@/src/components/game/guesses/PastGuesses'
import KnownInfo from '@/src/components/game/known/KnownInfo'
import Button from '@/src/components/layout/Button'
import { useModals } from '../context/ModalsProvider'
import { useItems } from '../context/ItemsProvider'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useRef } from 'react'

export default function Home() {
  const { guessed, guesses, answer, resetGame, surrenderGame, items } = useItems()
  const { toggleShowInstructions, toggleShowQualities, toggleShowRecords } = useModals()
  const node = useRef<HTMLDivElement>(null)

  function handleGame() {
    if (guessed) {
      resetGame()
    } else if (!guessed) {
      surrenderGame()
    }
  }

  return (
    <main>
      <section className='max-w-md md:max-w-[920px] lg:max-w-none mx-auto flex flex-row flex-wrap place-content-center md:place-content-start gap-2 mb-2'>
        <SwitchTransition mode='out-in'>
          <CSSTransition
            classNames='button'
            key={guessed ? 'New Game' : 'Surrender'}
            timeout={500}
            nodeRef={node}
            addEndListener={(done: () => void) =>
              node.current?.addEventListener('transitionend', done, false)
            }
          >
            <div ref={node}>
              <Button onClick={handleGame} text={guessed ? 'New Game' : 'Surrender'}/>
            </div>
          </CSSTransition>
        </SwitchTransition>
        {/* <Button onClick={resetGame} text='New Game' className={guesses.length === 0 && !guessed ? ' brightness-50 pointer-events-none' : ''}/>
        <Button onClick={surrenderGame} text='Surrender' className={guessed ? ' brightness-50 pointer-events-none' : ''}/> */}
        <Button onClick={() => toggleShowInstructions(true)} text='How To'/>
        <Button onClick={() => toggleShowQualities(true)} text='Qualities'/>
        <Button onClick={() => toggleShowRecords(true)} text='Records'/>
      </section>
      <section className='grid md:grid-cols-2 gap-4'>
        <div className='h-fit grid gap-2'>
          <KnownInfo/>
          { answer && <p className='text-center'>{answer.name} of total {items.length} items</p>}
        </div>
        <div className='flex flex-col place-items-center p-1 border-2 border-transparent'>
          <SearchContainer/>
          <PastGuesses/>
        </div>
      </section>
      <ModalsContainer/>
    </main>
  )
}
