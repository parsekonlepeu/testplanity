import {
  FC,
  PropsWithChildren,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react"
import { CSSTransition } from "react-transition-group"
import "./grow.css"

interface GrowProps {
  duration: number
  isin: boolean
  onExit: () => void
  onEnter: () => void
}

export const Grow: FC<PropsWithChildren<GrowProps>> = forwardRef<
  HTMLDivElement,
  PropsWithChildren<GrowProps>
>(({ children, isin, duration, onExit, onEnter }) => {
  const refdiv = useRef(null)
  const heightRef = useRef(0)
  const handleEnterActive = () => {
    const ent = document.getElementsByClassName("grow-enter-active").item(0)
    heightRef.current = ent ? ent.children[0].getClientRects()[0].height : 0
    const childrenContenair = document.getElementById("children-contenair")
    if (childrenContenair) {
      childrenContenair.style.maxHeight = `${heightRef.current}px`
      childrenContenair.style.transition = `max-height ${duration}ms`
    }
  }
  const handleExit = () => {
    const childrenContenair = document.getElementById("children-contenair")
    if (childrenContenair) {
      childrenContenair.style.maxHeight = `0px`
      childrenContenair.style.transition = `max-height ${duration}ms`
    }
  }
  return (
    <CSSTransition
      in={isin}
      timeout={duration + 100}
      classNames="grow"
      unmountOnExit
      nodeRef={refdiv}
      onEntering={handleEnterActive}
      onExiting={handleExit}
      onExited={onExit}
      onEnter={onEnter}
    >
      <div
        ref={refdiv}
        id="children-contenair"
      >
        {children}
      </div>
    </CSSTransition>
  )
})
