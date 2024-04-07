import axios from "axios";
let perPage = 200;

export async function fetchPhotosByInput (inputSearch,page) {
   const ACCESS_KEY = 'Lo9uorFXpgT_Y7XkOmyvCmdEbDFs7mI4M-i24Hz4fks';
  const url = `https://api.unsplash.com/search/photos?query=${inputSearch}&client_id=${ACCESS_KEY}`;
  const response = await axios.get(url, {
    params: {
      per_page: perPage,
      page: page
    },
  });
  const photos = response.data;
  return photos;
}