import axios from "axios";

const API_URL = "http://localhost:3000/users";

// POST API REQUEST
export const addUser = async (data) => {
    try {
       return await axios.post(API_URL, data)
    } catch (err) {
        console.log(`Error while calling add user api ${err}`)
    }
}

// GET API REQUEST
export const getAllUsers = async () => {
    try {
        return await axios.get(API_URL);
    } catch (err) {
        console.log(`Error while calling get all users api ${err}`)
    }
}

// GET API REQUEST(SINGLE USER)
export const getUser = async (id) => {
    try {
        return await axios.get(`${API_URL}/${id}`);
    } catch (err) {
        console.log(`Error while calling get user api ${err}`)
    }
}


// PUT API REQUEST
export const updateUser = async(data, id) => {
    try {
        return await axios.put(`${API_URL}/${id}`, data);
    } catch (err) {
        console.log(`Error while calling update user api ${err}`)
    }
}


// DELETE API REQUEST
export const deleteUser = async(id) => {
    try {
        return await axios.delete(`${API_URL}/${id}`)
    } catch (err) {
        console.log(`Error while calling delete user api ${err}`)
    }
}
