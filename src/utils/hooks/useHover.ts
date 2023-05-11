import { useState, useCallback } from "react";

export const useHover = () => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter: React.MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      e.preventDefault();
      setHover(true);
    },
    []
  );
  const handleMouseOut: React.MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      e.preventDefault();
      setHover(false);
    },
    []
  );

  return {
    hover,
    controls: {
      onMouseEnter: handleMouseEnter,
      onMouseOut: handleMouseOut,
    },
  };
};
