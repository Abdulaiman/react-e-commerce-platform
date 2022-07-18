import { createContext, useState } from "react";
export const DropDownContext = createContext({
  state: null,
  setState: () => null,
});

export const DropDownContextProvider = ({ children }) => {
  const [state, setState] = useState(null);
  const value = { state, setState };
  return (
    <DropDownContext.Provider value={value}>
      {children}
    </DropDownContext.Provider>
  );
};
