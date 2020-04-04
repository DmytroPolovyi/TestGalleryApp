import axios from 'axios';

export const GalleryAPI = {
  getData() {
    return axios.get('https://api.unsplash.com/photos/?client_id=FtHkbS708Z23QEmThENI4g7PgV3mGdCzuKbrdhwAI5M');
  }
};
