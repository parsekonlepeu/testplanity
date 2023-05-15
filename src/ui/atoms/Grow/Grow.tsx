import {
  FC,
  PropsWithChildren,
  forwardRef,
  useRef,
  useLayoutEffect,
} from "react"
import { CSSTransition } from "react-transition-group"
import "./grow.css"

type GrowDirection = "horizontal" | "vertical"

interface GrowProps {
  duration: number
  isin: boolean
  onExit?: () => void
  onEnter?: () => void
  direction?: GrowDirection
}

export const Grow: FC<PropsWithChildren<GrowProps>> = forwardRef<
  HTMLDivElement,
  PropsWithChildren<GrowProps>
>(({ children, isin, duration, onExit, onEnter, direction = "vertical" }) => {
  const refdiv = useRef(null)
  return (
    <CSSTransition
      in={isin}
      timeout={duration + 100}
      classNames={direction === "vertical" ? "growY" : "grow"}
      unmountOnExit
      nodeRef={refdiv}
      onExited={onExit}
      onEnter={onEnter}
    >
      <div ref={refdiv}>{children}</div>
    </CSSTransition>
  )
})
