import axios from "axios";
const ncNewsApi = axios.create({
  baseURL: "https://student-coders-news.herokuapp.com/api",
});

export const getArticleArr = () => {
  return ncNewsApi
    .get("/articles?sort_by=created_at&order=desc")
    .then((res) => res.data);
};

export const getTopicArr = () => {
  return ncNewsApi.get("/topics").then((res) => res.data);
};
