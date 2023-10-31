interface ButtonProps {
  onClick: () => void,
  className?: string,
  text: string,
}

export default function Button({ onClick, className, text} : ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={className + ' w-44 aspect-[159/41] bg-[url(\'/images/button.png\')] bg-cover bg-center text-gold uppercase duration-200 hover:text-gold-light hover:brightness-125'}
    >
      {text}
    </button>
  )
}