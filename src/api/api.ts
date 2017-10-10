import axios from 'axios';
import { UserData } from '../containers/Signin';

export default {
  user: {
    getUser: (data: UserData) => axios.post('/api/user/signin', data),
    signup: (data: UserData) => axios.post('/api/user/register', data),
    confirmEmail: (token: string) => axios.post('/api/user/confirm', { token })
  }
};
