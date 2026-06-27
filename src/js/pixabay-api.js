import axios from "axios";

const API_KEY = "56466329-080e28ba0c43f88c01656e1cc";

export function getImagesByQuery(query) {
  return axios
    .get("https://pixabay.com/api/", {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    })
    .then(response => response.data);
}