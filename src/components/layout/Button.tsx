interface ButtonProps {
  onClick: () => void,
  className?: string,
  text: string,
}

export default function Button({ onClick, className, text} : ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={(className ? className : '') + ' w-36 xs:w-44 aspect-[159/41] bg-cover bg-center text-sm xs:text-base text-gold uppercase hover:text-gold-light hover:brightness-125'}
    >
      {text}
    </button>
  )
}