import axios from 'axios';
import { UserData } from '../containers/Signup';

export default {
  user: {
    signup: (data: UserData) => axios.post('/user/register', { data })
  }
};
