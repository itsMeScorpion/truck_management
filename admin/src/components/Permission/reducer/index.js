const initailState = {
  designation: [],
  permission: [],
};

const permissionReducer = (state = initailState, action) => {
  switch (action.type) {
    case 'GET_DESIGNATION':
      return {
        ...state,
        designation: action.payload,
      };
    case 'GET_PERMISSION':
      return {
        ...state,
        permission: action.payload,
      };
    default:
      return state;
  }
};
export default permissionReducer;
