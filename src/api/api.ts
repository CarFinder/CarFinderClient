import axios from 'axios';
import { UserData } from '../containers/Signin'

export default {
    user: {
        getUser: (data: UserData) => 
            axios.post('user/signin', { data })
                .then((responce) => responce.data)
                .catch((error) => error)  
        }
    }
