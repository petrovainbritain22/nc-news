import axios from "axios";
const ncNewsApi = axios.create({
  baseURL: "https://student-coders-news.herokuapp.com/api",
});

export const getTopicsArr = () => {
  return ncNewsApi.get("/topics").then((res) => res.data);
};
export const getCommentsArr = (article_id) => {
  return ncNewsApi
    .get(`/articles/${article_id}/comments`)
    .then((res) => res.data);
};
export const getArticlesArr = (slug, sortBy, order) => {
  return ncNewsApi
    .get("/articles", {
      params: {
        topic: slug,
        sort_by: sortBy,
        order: order,
      },
    })
    .then((res) => res.data);
};
export const getUsersArr = () => {
  return ncNewsApi.get("/users").then((res) => res.data);
};
export const getArticleById = (article_id) => {
  return ncNewsApi.get(`/articles/${article_id}`).then((res) => res.data);
};
export const patchArticleVotes = (article_id, vote) => {
  return ncNewsApi
    .patch(`/articles/${article_id}`, vote)
    .then((res) => res.data);
};
export const patchCommentVotes = (comment_id, vote) => {
  return ncNewsApi
    .patch(`/comments/${comment_id}`, vote)
    .then((res) => res.data);
};

export const postComment = (article_id, comment) => {
  return ncNewsApi
    .post(`articles/${article_id}/comments`, comment)
    .then((res) => res.data);
};

export const deleteCommentById = (comment_id) => {
  return ncNewsApi.delete(`/comments/${comment_id}`).then((res) => res);
};
