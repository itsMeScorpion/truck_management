import History from '../../../Routes/History';

export const logout = () => async () => {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  History.push('/auth/login');
  //   window.open('https://localhost:3000');
};
