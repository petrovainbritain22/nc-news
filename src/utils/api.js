import axios from "axios";
const ncNewsApi = axios.create({
  baseURL: "https://student-coders-news.herokuapp.com/api",
});

export const getTopicsArr = () => {
  return ncNewsApi.get("/topics").then((res) => res.data);
};
export const getArticlesArr = (slug) => {
  return ncNewsApi
    .get("/articles", {
      params: {
        topic: slug,
      },
    })
    .then((res) => res.data);
};
export const getArticleById = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then((res) => res.data);
};
