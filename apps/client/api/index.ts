import axios from 'axios';

const SERVER = 'http://localhost:3030';

export const getRandomColor = async () => {
  const { data: color } = await axios.get<string>(`${SERVER}/color`);
  return color;
};
