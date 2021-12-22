import { useCallback, useState } from "react";

export const useToggle = (initialState) => {
  const [state, setState] = useState(initialState);

  const toggle = () => setState((state) => !state);

  return [state, toggle];
};