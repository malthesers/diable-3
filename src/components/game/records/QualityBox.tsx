interface QualityBoxProps {
  quality: String | any,
  chosen: boolean
}

export default function QualityBox({ quality, chosen }: QualityBoxProps) {
  return (
    <div>{quality}</div>
  )
}