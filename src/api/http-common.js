import axios from 'axios';

export default axios.create({
  baseURL: 'https://the-one-api.dev/v2',
  headers: {
    'Content-type': 'application/json',
    Authorization: 'Bearer wE5Gf1Rkb2OvY4PYNUZZ',
  },
});
