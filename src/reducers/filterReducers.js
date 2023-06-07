export const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "PRODUCT_LIST":
      return { ...state, productList: payload.products };
    case "SORT_BY":
      return { ...state, sortBy: payload.sortBy };
    case "BEST_SELLER_ONLY":
      return { ...state, bestSellerOnly: payload.bestSellerOnly };
    case "ONLY_IN_STOCK":
      return { ...state, inStock: payload.inStock };
    case "RATINGS":
      return { ...state, ratings: payload.ratings };
    case "CLEAR_FILTER":
      return {
        ...state,
        inStock: false,
        bestSellerOnly: false,
        sortBy: null,
        ratings: null,
      };
    default:
      throw new Error("No case Found");
  }
};
