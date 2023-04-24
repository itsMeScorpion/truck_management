import History from '../../../Routes/History';
import history from '../../../Routes/History';
import { postData } from '../../../api/service';
// import Success from '../../../helpers/Success';

export const addData = (data) => async (dispatch) => {
  console.log('in the action', data);
  await postData('/auth/login', data).then((e) => {
    console.log(e.data);
    // alert(e.data.message);
    if (e.data.success === true) {
      // <Success msg={e.data.message} modal={true} />;
      if (e.data.data.gtoken) {
        localStorage.setItem('role', e.data.data.role);
        localStorage.setItem('token', e.data.data.gtoken);
        alert(e.data.message);
        dispatch({
          type: 'IS_LOGIN',
          payload: true,
        });
        history.push('/dashboard');
      } else {
        alert(e.data.message);
      }
    } else {
      alert(e.data.message);
    }
  });
};

export const login = (data) => async (dispatch) => {
  console.log('data', data);
  await postData('/auth/signin', data).then((e) => {
    console.log('e', e.data);
    if (e.data.success === true) {
      localStorage.setItem('token', e.data.data.accessToken);
      localStorage.setItem('role', e.data.data.role);
      alert(e.data.message);
      history.push('/dashboard');
    } else {
      alert(e.data.message);
    }
  });
};
