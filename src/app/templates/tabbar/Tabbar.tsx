import { FC, useCallback } from "react";
import "./tabbar.css";
import { TapButton } from "../../../ui/atoms/button/TapButton";
import { WithIcon } from "../../../ui/molecules/withIcon/WithIcon";
import { MdContentCut, MdContentCopy, MdDelete } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../store/hookTypedredux";
import { simpleChangeAppointment } from "../../../store/slices/appointmentSlice";

export const Tabbar: FC = () => {
  const dispatch = useAppDispatch();
  const created = useAppSelector((state) => state.appointment.created);
  const came = useAppSelector((state) => state.appointment.came);
  const handleClickChoiced = useCallback(() => {
    // dispatch(simpleChangeAppointment({
    //   keys: [],
    //   points: []
    // }));
  }, []);

  const handleClickCame = useCallback(() => {
    dispatch(
      simpleChangeAppointment({
        keys: ["came"],
        points: [true],
      })
    );
  }, []);

  const handleClickNotCame = useCallback(() => {
    dispatch(
      simpleChangeAppointment({
        keys: ["came"],
        points: [false],
      })
    );
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
