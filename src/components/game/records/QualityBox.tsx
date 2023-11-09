interface QualityBoxProps {
  quality: String | any,
  chosen: boolean
}

export default function QualityBox({ quality, chosen }: QualityBoxProps) {
  const initial = quality.charAt(0)
  
  return (
    <div className={(chosen ? 'bg-set-gradient' : 'bg-undefined-gradient') + ' grid'}>
      <div className={(chosen ? 'bg-green-600' : 'bg-red-800') + ' w-full h-full bg-opacity-40 shadow-guess-inner grid-center'}></div>
      <p className='uppercase grid-center'>{initial}</p>
    </div>
  )
}