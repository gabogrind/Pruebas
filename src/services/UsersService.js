import axios from "axios";

const usersUrl = "https://backendmisionticsprint6.herokuapp.com/usuarios"; 
export const createUser = async (user) => {
    return await axios.post(`${usersUrl}/`, user);
}