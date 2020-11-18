import axios from 'axios';

export default {
    //gets users from api
    getUsers: function(){
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};