import axios from 'axios';

export const fetchCv = async (id = 1) => {
    const response = await axios.get(`http://localhost:3000/api/cv/2}`);
    return response.data;
};
