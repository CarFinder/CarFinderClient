import axios from 'axios';
import { UserData } from '../containers/Signin'

export default {
    user: {
        getUser: (data: UserData) => 
            axios.post('api/signin', { data })
                .then(function(responce) { 
                    localStorage.setItem("jwt", (responce.data));
                    //decode jwt and return it
                })
                .catch(function (error) {
                    console.log(error);
                })  
        }
    }
