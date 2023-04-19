const initialState = {
  contact: '',
};
const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_DATA':
      return {
        ...state,
        contact: action.payload,
      };
    default:
      return state;
  }
};

export default contactReducer;
