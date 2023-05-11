import { FC, useCallback } from "react";
import { ButtonLoad, ClickButtonLoad } from "../../atoms/buttonLoad/ButtonLoad";

import "./choiceClient.css";
import { InputAnimate } from "../../atoms/inputAnimate/InputAnimate";
import { useManageInput } from "../../../utils/hooks/useManageInput";

interface ChoiceClientProps {
  onCreate: (name: string) => void;
  onChange: (change: string) => void;
  alreadyCreated?: boolean;
  nameClient?: string;
  label?: string;
  loading?: boolean;
  error?: boolean;
  disabled?: boolean;
}

export const ChoiceClient: FC<ChoiceClientProps> = ({
  onCreate,
  onChange,
  alreadyCreated,
  nameClient = "",
  label = "Choisir un client",
  loading = false,
  error = false,
  disabled = false,
}) => {
  const { value, focus, functions } = useManageInput(nameClient, onChange);
  const handleCreate: ClickButtonLoad = useCallback(() => {
    onCreate(value);
  }, [value]);

  return (
    <div
      className="input-choiceclient"
      style={{
        border: focus ? "1px solid #48BB78" : undefined,
      }}
    >
      <InputAnimate
        {...functions}
        value={value}
        label={label}
        disabled={disabled}
      />
      {value.length !== 0 && !alreadyCreated ? (
        <ButtonLoad
          onClick={handleCreate}
          text={error ? "Réessayer" : "Créer"}
          loading={loading}
          disabled={loading || disabled}
        />
      ) : null}
    </div>
  );
};
