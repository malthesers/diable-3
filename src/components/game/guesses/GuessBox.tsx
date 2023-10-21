interface ItemGuessProps {
  guess: string,
  answer: string | undefined,
}

export default function GuessBox({ guess, answer }: ItemGuessProps) {
  const correct:boolean = guess === answer

  return (
    <div className='grid aspect-square bg-[url("/images/icons/set.png")] bg-center bg-cover'>
      <div className={(correct ? 'bg-green-700' : 'bg-red-700') + ' w-full h-full bg-opacity-40 grid-center'}></div>
      <span className='grid-center my-auto'>{guess}</span>
    </div>
  )
}