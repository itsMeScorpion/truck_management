import history from '../../../Routes/History';

import { postData } from '../../../api/service';

export const addData = (data) => async (dispatch) => {
  console.log('in the action', data);

  await postData('/contact-us', data).then((e) => {
    console.log(e.data.message);
    alert(e.data.message);
    // history.push('/admin');
  });
};
