import axios from 'axios';

const SERVER = 'http://localhost:3030';

export const getRandomColor = () => axios.get(`${SERVER}/color`);
