import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_TEST_API,
});

const testFunction = async (data, onError) => {
    try {
        const response = await api.get('/posts/1', {
            // headers: { 'auth-token': token },
        });
        return response?.data;
    } catch (error) {
        onError(error?.response.data);
        return false;
    }
};

const API = {
    testFunction,
};

export default API;
