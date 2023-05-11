import { useState, useCallback } from "react";

export const useHover = () => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = useCallback(() => {
    setHover(true);
  }, []);
  const handleMouseOut = useCallback(() => {
    setHover(false);
  }, []);

  return {
    hover,
    controls: {
      onMouseEnter: handleMouseEnter,
      onMouseOut: handleMouseOut,
    },
  };
};
