import axios from 'axios';
import { UserData } from '../containers/Signin';
import { UserData as RestorePasswordUserData } from '../containers/ChangePassword';

export default {
  user: {
    getUser: (data: UserData) => axios.post('/api/user/signin', data),
    signup: (data: UserData) => axios.post('/api/user/register', data),
    confirmEmail: (token: string) => axios.post('/api/user/confirm', { token }),
    submitEmail: (data: RestorePasswordUserData) => axios.post('/api/user/forgot', data),
    changePassword: (data: RestorePasswordUserData) => axios.post('/api/user/restore', { data })
  }
};
