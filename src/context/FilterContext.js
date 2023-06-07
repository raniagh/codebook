const { createContext, useContext } = require("react");

const filterInitialState = {
  productList: [],
  inStock: false,
  bestSeller: false,
  sortBy: null,
  ratings: null,
};

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({ children }) => {
  const value = { productList: [1, 2, 3] };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
export const useFilter = () => useContext(FilterContext);
