import { forwardRef } from 'react'

interface ButtonProps {
  onClick: () => void,
  className?: string,
  disabled?: boolean
  text: string,
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ onClick, className, disabled = false, text} : ButtonProps, ref) {
  return (
    <button
      ref={ref}
      onClick={onClick}
      disabled={disabled}
      className={(className ? className : '') + (disabled ? ' pointer-events-none brightness-50' : '') + ' w-36 xs:w-44 aspect-[159/41] bg-[url("/images/button.png")] bg-cover bg-center text-sm xs:text-base text-gold uppercase outline-none duration-200 hover:text-gold-light hover:brightness-125 focus-visible:text-gold-light focus-visible:brightness-125'}
    >
      {text}
    </button>
  )
})

export default Button