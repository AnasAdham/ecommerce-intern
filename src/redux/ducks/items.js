export const GET_ITEMS = "GET_ITEMS";
export const SET_ITEMS = "SET_ITEMS";

export const getItems = () => ({
  type: GET_ITEMS,
});

export const setItems = (items) => ({
  type: SET_ITEMS,
  // items: items,
  items, // shorthand
});

const initialState = {
  items: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      const { items } = action;
      return { ...state, items };
    default:
      return state;
  }
};
