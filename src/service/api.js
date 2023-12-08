import axios from 'axios';

const url = 'https://backend-whatsapp-clone.onrender.com/';

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log('Error While Adding User API : ', error.code, ' - ', error.message);
    }
}

export const getAllUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        return response.data;
    } catch (error) {
        console.log('Error while getting User API : ', error.code, ' - ', error.message);
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log('Error while setConversation API : ', error.code, ' - ', error.message);
    }
}

export const getConversation = async (data) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, data);
        return response.data;
    } catch (error) {
        console.log('Error while getConversation API : ', error.code, ' - ', error.message);
    }
}

export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/messages/add`, data);
    } catch (error) {
        console.log('Error while newMessage API : ', error.code, ' - ', error.message);
    }
}

export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/messages/get/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error while getMessages API : ', error.code, ' - ', error.message);
    }
}

export const uploadFile = async (data) => {
    try {
        await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log('Error while uploadFile API : ', error.code, ' - ', error.message);
    }
}