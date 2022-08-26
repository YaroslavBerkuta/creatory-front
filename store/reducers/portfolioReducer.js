const defaultState = {
  portfolioList: [],
};
export const portfolioReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_PORTFOLIO":
      return {
        portfolioList: action.payload,
      };
    default:
      return state;
  }
};
