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
  const heightRef = useRef(0)
  const widthRef = useRef(0)
  const handleEnter = () => {
    onEnter && onEnter()
    const ent = document.getElementsByClassName("grow-enter").item(0)
    heightRef.current = ent ? ent.children[0].getClientRects()[0].height : 0
    widthRef.current = ent ? ent.children[0].getClientRects()[0].width : 0
    const childrenContenair = document.getElementById("children-contenair")
    if (childrenContenair) {
      if (direction === "vertical") {
        childrenContenair.style.maxHeight = `0px`
      } else {
        childrenContenair.style.maxWidth = `0px`
      }
    }
    console.log("on enter", ent)
  }
  const handleEnterActive = () => {
    console.log("-----------------------")
    const childrenContenair = document.getElementById("children-contenair")
    if (childrenContenair) {
      if (direction === "vertical") {
        console.log("heightRef.current", heightRef.current)
        console.log(
          "childrenContenair.style.maxHeight",
          childrenContenair.style.maxHeight
        )
        childrenContenair.style.maxHeight = `${heightRef.current}px`
        childrenContenair.style.transition = `max-height ${duration}ms`
      } else {
        childrenContenair.style.maxWidth = `${widthRef.current}px`
        childrenContenair.style.transition = `max-width ${duration}ms`
      }
    }
    console.log("on enter active")
  }
  const handleExit = () => {
    const childrenContenair = document.getElementById("children-contenair")
    if (childrenContenair) {
      if (direction === "vertical") {
        childrenContenair.style.maxHeight = `0px`
        childrenContenair.style.transition = `max-height ${duration}ms`
      } else {
        childrenContenair.style.maxWidth = `0px`
        childrenContenair.style.transition = `max-width ${duration}ms`
      }
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
      onEnter={handleEnter}
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
