import { getData } from '../../../api/service';

export const listData = () => async (dispatch) => {
  await getData('/gallery').then((e) => {
    console.log('response in list', e.data.data);
    dispatch({
      type: 'GALLERY',
      payload: e.data.data,
    });
  });
};
