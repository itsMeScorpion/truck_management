const initailState = {
  gallery: [],
};

const galleryReducer = (state = initailState, action) => {
  switch (action.type) {
    case 'GALLERY':
      return {
        ...state,
        gallery: action.payload,
      };
    default:
      return state;
  }
};
export default galleryReducer;
