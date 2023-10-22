interface ItemGuessProps {
  guess: string,
  answer: string | undefined,
}

export default function GuessBox({ guess, answer }: ItemGuessProps) {
  const correct:boolean = guess === answer

  return (
    <div className={(correct ? 'bg-set-icon' : 'bg-undefined-icon') + ` grid h-20 bg-center bg-cover`}>
      <div className={(correct ? 'bg-green-600' : 'bg-red-800') + ' w-full h-full bg-opacity-40 grid-center shadow-guess-inner'}></div>
      <span className='my-auto text-xs grid-center'>{guess}</span>
    </div>
  )
}