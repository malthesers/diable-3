interface ItemGuessProps {
  guess: string,
  answer: string | undefined,
}

export default function GuessBox({ guess, answer }: ItemGuessProps) {
  const correct:boolean = guess === answer

  return (
    <div className={(correct ? 'bg-set-icon' : 'bg-base-icon') + ` grid h-20 bg-center bg-cover border-2 border-bronze`}>
      <div className={(correct ? 'bg-green-600' : 'bg-red-600') + ' w-full h-full bg-opacity-40 grid-center'}></div>
      <span className='grid-center my-auto'>{guess}</span>
    </div>
  )
}