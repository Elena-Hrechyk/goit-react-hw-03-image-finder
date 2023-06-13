import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = async (value, currentPage, abortCtrl) => {
  const response = await axios.get('/', {
    signal: abortCtrl.signal,
    params: {
      q: value,
      key: '35861732-765d2ea3a6aad5336048671b3',
      page: currentPage,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
  return response.data;
};

// export const fetchDogByBreed = async ({ breedId, abortCtrl }) => {
//   const response = await axios.get('/images/search', {
//     signal: abortCtrl.signal,
//     params: {
//       breed_id: breedId,
//     },
//   });
//   return response.data[0];
// };
