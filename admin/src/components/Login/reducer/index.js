const initailState = {
  isLogin: localStorage.getItem('token') ? localStorage.getItem('token') : null,
};

const loginReducer = (state = initailState, action) => {
  switch (action.type) {
    case 'IS_LOGIN':
      return {
        ...state,
        isLogin: localStorage.getItem('token')
          ? localStorage.getItem('token')
          : null,
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
