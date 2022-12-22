export const initialState = {
    user: [],
    basket: [],
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return { ...state, basket: [...state.basket, action.item] };
        case "SIGN_IN_USER":
            return { ...state, user: [action.item] };
        case "SIGN_OUT_USER":
            return { ...state, user: [] };
        default:
            return state;
    }
};
