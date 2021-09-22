import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com'
axios.defaults.params = {
   key: '22578117-98ddcf36fbc3d0da8c48aeee6',
   per_page: 12,
   page_type: 'photo',
   orientation: 'horizontal',
}

export const fetchImages = async (name, page) => {
    const {data: {hits}} = await axios.get(`/api/?q=${name}&page=${page}`)
  
    return  hits;
  }