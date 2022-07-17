import { createContext, useState } from "react";
import { Value } from "sass";
export const DropDownContext = createContext({
  state: null,
  setState: () => null,
});

export const DropDownContextProvider = ({ children }) => {
  const [state, setState] = useState(true);
  const value = { state, setState };
  return (
    <DropDownContext.Provider value={value}>
      {children}
    </DropDownContext.Provider>
  );
};
