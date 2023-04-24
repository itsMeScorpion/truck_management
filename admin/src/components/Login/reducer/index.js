const initailState = {
  isLogin: false,
};

const loginReducer = (state = initailState, action) => {
  switch (action.type) {
    case 'IS_LOGIN':
      return {
        ...state,
        isLogin: action.payload,
      };
    case 'IS_LOGOUT':
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};
export default loginReducer;
