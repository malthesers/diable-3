import { Qualities } from '@/src/interfaces/Item'

interface ItemGuessProps {
  quality: Qualities,
  guess: string,
  answer: string | undefined,
}

export default function GuessBox({ quality, guess, answer }: ItemGuessProps) {
  const correct:boolean = guess === answer
  const shortened = guess === 'necromancer' ? 'necro mancer' : guess
  const values = shortened.split(' ')

  return (
    <div className={(correct ? 'bg-set-gradient' : 'bg-undefined-gradient') + ' grid h-[52px] bg-center bg-cover'}>
      <div className={
        (correct ? 'bg-green-600 ' : 'bg-red-800 ') + 
        (quality === 'ethereal' ? 'shadow-guess-ethereal' : 'shadow-guess-inner' ) +
        ' size-full bg-opacity-40 grid-center'}
      ></div>
      <p className='my-auto text-xs sm:text-sm grid-center'>
        <span className='block'>{values[0]}</span>
        {values[1] && <span className='block'>{values[1]}</span>}
      </p>
    </div>
  )
}