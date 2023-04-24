const initailState = {
  gallery: [],
};

const galleryReducer = (state = initailState, action) => {
  switch (action.type) {
    case 'GAllERY':
      return {
        ...state,
        gallery: action.payload,
      };
    default:
      return state;
  }
};
export default galleryReducer;
