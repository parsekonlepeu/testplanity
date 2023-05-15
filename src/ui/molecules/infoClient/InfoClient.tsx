import { FC, useState, useCallback, useRef, useEffect } from "react"
import "./infoClient.css"
import { WithIcon } from "../withIcon/WithIcon"
import { MdInfoOutline } from "react-icons/md"
import { TapButton } from "../../atoms/button/TapButton"
import { Info } from "../../atoms/info/Info"
import { CSSTransition } from "react-transition-group"
import { Grow } from "../../atoms/Grow/Grow"

interface InfoClientProps {
  fold?: boolean
  text: string
}

export const InfoClient: FC<InfoClientProps> = ({ fold = true, text }) => {
  const [isFold, setIsFold] = useState(fold !== undefined ? fold : true)
  const [buttonVisible, setButtonVisible] = useState(
    fold !== undefined ? !fold : false
  )
  const handleClick = useCallback(() => {
    setIsFold(!isFold)
  }, [isFold])

  const nodeRef = useRef(null)
  return (
    <WithIcon
      Icon={MdInfoOutline}
      posIcon="left"
      width="100%"
    >
      {buttonVisible ? (
        <TapButton
          type="text"
          label="Info Client"
          onClick={handleClick}
          padding={0}
        />
      ) : null}
      <Grow
        isin={isFold}
        duration={100}
        onExit={() => {
          setButtonVisible(true)
        }}
        onEnter={() => {
          setButtonVisible(false)
        }}
        direction="vertical"
      >
        <Info
          label="Info Client"
          text={text}
          onClick={handleClick}
          ref={nodeRef}
        />
      </Grow>
    </WithIcon>
  )
}
