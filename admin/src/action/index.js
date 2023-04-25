export const socketData = (data) => async (dispatch) => {
  console.log('data in socket action', data);
  dispatch({
    type: 'SOCKET_DATA',
    payload: data,
  });
};
