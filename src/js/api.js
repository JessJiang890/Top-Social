import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost/api',
});
//向外界发出api的请求
export const fetchProfile = async () => {
  const result = await axiosInstance.get('/profile');
  return result.data.data.profile;
};

export const fetchCards = async () => {
  const result = await axiosInstance.get('/cards');
  console.log(result);
  return result.data.data;
};
