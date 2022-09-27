import axios from "axios";
const ncNewsApi = axios.create({
  baseURL: "https://student-coders-news.herokuapp.com/api",
});

export const getArticleArr = (slug, sort, order) => {
  let query = "?sort_by=";
  query += sort ? sort : "created_at";
  query += "&order=";
  query += order ? order : "desc";
  query += slug ? "&topic=" + slug : "";

  return ncNewsApi.get(`/articles${query}`).then((res) => res.data);
};

export const getTopicArr = () => {
  return ncNewsApi.get("/topics").then((res) => res.data);
};
