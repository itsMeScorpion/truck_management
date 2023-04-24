import { postData, getData } from '../../../api/service';

export const addData = (data) => async (dispatch) => {
  console.log('in the action', data);
  await postData('/gallery', data).then((e) => console.log('response', e));
};

export const listData = () => async (dispatch) => {
  await getData('/gallery').then((e) => {
    console.log('response in list', e.data.data);
    dispatch({
      type: 'GALLERY',
      payload: e.data.data,
    });
  });
};
