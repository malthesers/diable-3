import { forwardRef } from 'react'

interface ButtonProps {
  onClick: () => void,
  className?: string,
  text: string,
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ onClick, className, text} : ButtonProps, ref) {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={(className ? className : '') + ' w-36 xs:w-44 aspect-[159/41] bg-cover bg-center text-sm xs:text-base text-gold uppercase duration-200 hover:text-gold-light hover:brightness-125'}
    >
      {text}
    </button>
  )
})

export default Button