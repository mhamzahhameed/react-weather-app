import { API_KEY } from "../local/Contents";

const WEB_HANDLER = (url, success, error) => {
  url = url + `&appid=${API_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((rawData) => {
      return success(rawData);
    })
    .catch((err) => {
      return error(err);
    });
};

export { WEB_HANDLER };
