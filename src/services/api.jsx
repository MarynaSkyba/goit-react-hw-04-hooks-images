import axios from 'axios';

export const fetchImages = async (name, page) => {
    const response = await axios.get(`https://pixabay.com/api/?q=${name}&page=${page}&key=22578117-98ddcf36fbc3d0da8c48aeee6&image_type=photo&orientation=horizontal&per_page=12`)
  
    return response.data.hits;
  }