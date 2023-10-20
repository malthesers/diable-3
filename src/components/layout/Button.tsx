interface ButtonProps {
  onClick: () => {},
  text: string,
}

export default function Button({ onClick, text} : ButtonProps) {
  return (
    <button onClick={onClick} className="w-52 aspect-[159/41] bg-[url('/images/button.png')] bg-cover bg-center uppercase">{text}</button>
  )
}