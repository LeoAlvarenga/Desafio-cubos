import axios from "axios";

const tmdbApi = axios.create({
  baseURL: "ttps://api.themoviedb.org",
});

export default tmdbApi;
