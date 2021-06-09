import axios from "axios";

export const PostsService = {
  get(q) {
    return axios.get(`https://hn.algolia.com/api/v1/search?query=${q}`);
  }
};
