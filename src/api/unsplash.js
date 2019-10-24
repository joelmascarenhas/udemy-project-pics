import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID c075d8b8960afd17c50f7734d47f1e1eb408551cc2d12ede4c49e3a8e5f74077'
      }
});

