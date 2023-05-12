import { FC, useState, useCallback, useRef, useEffect } from "react";
import "./infoClient.css";
import { WithIcon } from "../withIcon/WithIcon";
import { MdInfoOutline } from "react-icons/md";
import { TapButton } from "../../atoms/button/TapButton";
import { Info } from "../../atoms/info/Info";
import { CSSTransition } from "react-transition-group";

interface InfoClientProps {
  fold?: boolean;
  text: string;
}

export const InfoClient: FC<InfoClientProps> = ({ fold = true, text }) => {
  const [isFold, setIsFold] = useState(fold !== undefined ? fold : true);
  const [buttonVisible, setButtonVisible] = useState(
    fold !== undefined ? !fold : false
  );
  const handleClick = useCallback(() => {
    setIsFold(!isFold);
  }, [isFold]);
  useEffect(() => {
    console.log("isFold", isFold);
    console.log("buttonVisible", buttonVisible);
  }, [buttonVisible, isFold]);

  const nodeRef = useRef(null);
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
        />
      ) : null}
      <CSSTransition
        in={isFold}
        nodeRef={nodeRef}
        timeout={200}
        classNames="tinfo"
        unmountOnExit
        onExited={() => {
          setButtonVisible(true);
        }}
        onEnter={() => {
          setButtonVisible(false);
        }}
      >
        <Info
          label="Info Client"
          text={text}
          onClick={handleClick}
          ref={nodeRef}
        />
      </CSSTransition>
    </WithIcon>
  );
};
