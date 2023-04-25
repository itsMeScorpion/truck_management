import { postData, getData, patchData } from '../../../api/service';

// export const addData = (data) => async (dispatch) => {
//   console.log('in the action', data);
//   await postData('/gallery', data).then((e) => console.log('response', e));
// };

export const getDesignation = () => async (dispatch) => {
  await getData('/designation').then((e) => {
    console.log('response in list', e.data.data);
    dispatch({
      type: 'GET_DESIGNATION',
      payload: e.data.data,
    });
  });
};
export const getPermission = () => async (dispatch) => {
  await getData('/permission').then((e) => {
    console.log('data to the action', e.data);
    dispatch({
      type: 'GET_PERMISSION',
      payload: e.data.data,
    });
  });
};
export const editPermission = (data) => async (dispatch) => {
  console.log('in the update action', data);
  await patchData('/permission', data).then((e) => {
    console.log(e);
  });
};
