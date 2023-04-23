import { postData } from '../../../api/service';

export const addData = (data) => async (dispatch) => {
  console.log('in the action', data);
  await postData('/gallery', data).then((e) => console.log('response', e));
};
