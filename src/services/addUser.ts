import axios from 'axios';

const addUser = async function(data: any) {
    try {
      const response = await axios.post('http://localhost:8080/api/users', data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
}

export default addUser;