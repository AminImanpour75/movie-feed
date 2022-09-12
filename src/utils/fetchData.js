import axios from "axios";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5f18249a43mshe0f544f57d10036p135b42jsna87274752cbb",
    "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
  },
};

const BASE_URL = `https://movies-app1.p.rapidapi.com/api`;

export const fetchData = (entity) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/${entity}`, options)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export default fetchData;
