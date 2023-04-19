import history from '../../../Routes/History';
import { postData } from '../../../api/service';
import Success from '../../../helpers/Success';

export const addData = async (data, dispatch) => {
  console.log('in the action', data);
  await postData('/contact-us', data).then((e) => {
    console.log(e.data);
    // alert(e.data.message);
    if (e.data.success === true) {
      // <Success msg={e.data.message} modal={true} />;
      alert(e.data.message);
      // history.push('/');
    } else {
      alert(e.data.message);
    }
  });
};
