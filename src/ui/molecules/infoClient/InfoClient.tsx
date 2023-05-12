import { FC, useState, useCallback } from "react";
import "./infoClient.css";
import { WithIcon } from "../withIcon/WithIcon";
import { MdInfoOutline } from "react-icons/md";
import { TapButton } from "../../atoms/button/TapButton";
import { Info } from "../../atoms/info/Info";

interface InfoClientProps {
  fold?: boolean;
  text: string;
}

export const InfoClient: FC<InfoClientProps> = ({ fold = true, text }) => {
  const [isFold, setIsFold] = useState(fold !== undefined ? fold : true);
  const handleClick = useCallback(() => {
    setIsFold(!isFold);
  }, [isFold]);
  return (
    <WithIcon
      Icon={MdInfoOutline}
      posIcon="left"
      width="100%"
    >
      {isFold ? (
        <TapButton
          type="text"
          label="Info Client"
          onClick={handleClick}
        />
      ) : (
        <Info
          label="Info Client"
          text={text}
          onClick={handleClick}
        />
      )}
    </WithIcon>
  );
};
