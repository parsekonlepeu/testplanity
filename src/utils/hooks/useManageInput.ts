import { useState, useCallback } from "react";

export const useManageInput = (
  valueInitiel: string,
  onChangeValue?: OnChangeText
) => {
  const [value, setValue] = useState(valueInitiel);
  const [focus, setFocus] = useState(false);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      onChangeValue && onChangeValue(e.target.value);
      setValue(e.target.value);
    },
    []
  );
  const onFocus: React.FocusEventHandler<HTMLInputElement> = useCallback(() => {
    setFocus(true);
  }, []);
  const onBlur: React.FocusEventHandler<HTMLInputElement> = useCallback(() => {
    setFocus(false);
  }, []);

  return {
    value,
    focus,
    functions: {
      onChange,
      onFocus,
      onBlur,
    },
  };
};
