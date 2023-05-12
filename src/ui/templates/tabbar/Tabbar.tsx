import { FC, useCallback } from "react";
import "./tabbar.css";
import { TapButton } from "../../atoms/button/TapButton";
import { WithIcon } from "../../molecules/withIcon/WithIcon";
import { MdContentCut, MdContentCopy, MdDelete } from "react-icons/md";
import { useAppDispatch } from "../../../store/hookTypedredux";
import { changeCreated } from "../../../store/slices/appointmentSlice";

interface TabbarProps {
  created: boolean;
  came: boolean;
  onChange: OnChangeText;
}

export const Tabbar: FC<TabbarProps> = ({ created, came, onChange }) => {
  const dispatch = useAppDispatch();
  const handleClickChoiced = useCallback(() => {
    dispatch(changeCreated);
  }, []);

  const handleClickCame = useCallback(() => {
    onChange("came");
  }, []);

  const handleClickNotCame = useCallback(() => {
    onChange("notCame");
  }, []);

  return (
    <div className="tabbar-client-contenair">
      <div className="tabbar-client-c-v-c-c-s">
        <div className="tabar-client-choix-venu">
          <TapButton
            label="Choisi(e)"
            backgroundColor="#48BB78"
            labelColor={created && came ? "white" : "#34423E"}
            type={created && came ? "contained" : "text"}
            onClick={handleClickChoiced}
          />
          {created ? (
            <TapButton
              label="Venu"
              backgroundColor="#2C5282"
              labelColor={came ? "white" : "#34423E"}
              type={came ? "contained" : "text"}
              onClick={handleClickCame}
            />
          ) : null}
          {created ? (
            <TapButton
              label="Pas venu"
              backgroundColor="#F56565"
              labelColor={!came ? "white" : "#34423E"}
              type={!came ? "contained" : "text"}
              onClick={handleClickNotCame}
            />
          ) : null}
        </div>
        {created ? (
          <div className="tabbar-client-c-c-s">
            <WithIcon Icon={MdContentCopy}>
              <TapButton
                label="Copier"
                type="text"
              />
            </WithIcon>
            <WithIcon Icon={MdContentCut}>
              <TapButton
                label="Couper"
                type="text"
              />
            </WithIcon>
            <WithIcon Icon={MdDelete}>
              <TapButton
                label="Supprimer"
                type="text"
              />
            </WithIcon>
          </div>
        ) : null}
      </div>
      {created ? (
        <div className="tabbar-client-opt-encaiss">
          <button className="unknow-button">
            {"Plus d'options (produits, remises, ...)"}
          </button>
          <button className="unknow-button unknow-button-green">
            {"Encaisser 30,00 €"}
          </button>
        </div>
      ) : null}
    </div>
  );
};
