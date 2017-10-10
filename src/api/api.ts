import axios from 'axios';
import { UserData } from '../containers/Signin';

export const config = {
  apiUrl: 'localhost:3000'
};

export default {
  user: {
    getUser: (data: UserData) => axios.post(`/user/signin`, { data }),
    signup: (data: UserData) => axios.post('/user/register', { data }),
    confirmEmail: (token: string) => axios.post('/user/confirm', { token })
  }
};
