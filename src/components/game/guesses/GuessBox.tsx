interface ItemGuessProps {
  guess: string,
  answer: string | undefined,
}

export default function GuessBox({ guess, answer }: ItemGuessProps) {
  const correct:boolean = guess === answer
  const background:string = correct ? 'set' : 'base'

  return (
    <div className={`grid aspect-square bg-[url("/images/icons/${background}.png")] bg-center bg-cover`}>
      <div className={(correct ? 'bg-green-600' : 'bg-red-600') + ' w-full h-full bg-opacity-40 grid-center'}></div>
      <span className='grid-center my-auto'>{guess}</span>
    </div>
  )
}