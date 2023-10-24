import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { useRef } from 'react'

interface KnownValueProps {
  className?: string,
  value: string
}

export default function KnownValue({ className, value }: KnownValueProps) {
  const node = useRef<HTMLElement>(null)

  return (
    <SwitchTransition mode='out-in'>
      <CSSTransition
        classNames='fade'
        key={value}
        nodeRef={node}
        addEndListener={(done: () => void) =>
          node.current?.addEventListener('transitionend', done, false)
        }
      >
        <span ref={node} className={className}>{value}</span>
      </CSSTransition>
    </SwitchTransition>
  )
}