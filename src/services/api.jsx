import axios from 'axios';


export const fetchImages = async imageName => {
    const response = await axios.get(`https://pixabay.com/api/?q=${imageName}&page=1&key=22578117-98ddcf36fbc3d0da8c48aeee6&image_type=photo&orientation=horizontal&per_page=12`)
    return response.data.hits;
  }