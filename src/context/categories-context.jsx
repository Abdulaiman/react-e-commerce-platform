import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils.js";
export const CategoriesContext = createContext({
  categoriesMap: [],
});
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoriesMap] = useState({});

  useEffect(() => {
    const getData = async () => {
      const categoriesMap = await getCategoriesAndDocument();
      setcategoriesMap(categoriesMap);
    };
    getData();
  }, []);
  const value = { categoriesMap, setcategoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
