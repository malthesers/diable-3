interface ButtonProps {
  onClick: () => {},
  text: string,
}

export default function Button({ onClick, text} : ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-52 aspect-[159/41] bg-[url('/images/button.png')] bg-cover bg-center text-gold uppercase duration-200 hover:brightness-125"
    >
      {text}
    </button>
  )
}