import axios from 'axios';
import * as interfaces from '../interfaces';
import { User } from '../redux/models/userModel';

export default {
  user: {
    getUser: (data: interfaces.SigninUserData) => axios.post('/api/user/signin', data),
    signup: (data: interfaces.SignupUserData) => axios.post('/api/user/register', data),
    confirmEmail: (token: string) => axios.post('/api/user/confirm', { token }),
    submitEmail: (data: interfaces.RestorePasswordUserData) => axios.post('/api/user/forgot', data),
    changePassword: (data: interfaces.RestorePasswordUserData) =>
      axios.post('/api/user/restore', { data }),
    changeUserData: (data: User) => axios.post('api/user/update-user-data', data),
    changeUserAvatar: (data: interfaces.ChangeUserAvatar) =>
      axios.post('api/user/update-user-image', data),
    changeUserSettings: (data: interfaces.ChangeUserSettings) =>
      axios.post('api/user/update-user-settings', data)
  },
  filters: {
    fetchMarks: () => axios.get('/api/filter/marks'),
    fetchBodyTypes: () => axios.get('/api/filter/bodytypes'),
    fetchModels: (markId: string) => axios.post('/api/filter/models', { markId }),
    fetchResults: (data: interfaces.CarFilter) => axios.post('/api/ad', data)
  },
  savedSearch: {
    fetchFilters: () => axios.get('/api/filter/saved'),
    submitSavedFilter: (data: interfaces.SavedFilter) => axios.post('/api/filter/saved', { data }),
    fetchSavedSearchResults: () => axios.get('/api/ad/saved'),
    removeAllSavedFilters: () => axios.delete('/api/filter/saved/all'),
    removeSavedFilterById: (id: string) => axios.delete(`/api/filter/saved/${id}`)
  },
  liquidAds: {
    fetchLiquidAds: () => axios.get('/api/liquid')
  }
};
