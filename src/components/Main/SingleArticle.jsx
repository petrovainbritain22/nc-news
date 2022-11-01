import {useContext, useEffect, useState} from "react";
import {ErrContext} from "../../contexts/Error";
import {useParams} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {getArticleById} from "../../utils/api";
import {toDateStr} from "../../utils/toDateStr";
import ArticleVote from "../Article/ArticleVote";
import ErrorCard from "../ErrorCard";
import LoadingCard from "../LoadingCard";

export default function SingleArticle() {
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState({});

  const {setErr} = useContext(ErrContext);
  const {article_id} = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then(({article}) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErr(() => {
          return {msg: err.response.data.msg};
        });
      });
  }, [article_id]);

  return (
    <LoadingCard isLoading={isLoading}>
      <article>
        <h2>{article.title}</h2>
        <div className="row grey">
          <span className="col">
            Posted by <strong>{article.author}</strong>
          </span>{" "}
          <span className="col">{toDateStr(article.created_at)}</span>
        </div>
        <div className="article-votes-comments">
          <ArticleVote votes={article.votes} />
          <HashLink
            smooth
            to={`/articles/${article_id}/comments#form_comments`}
          >
            {article.comment_count} comments
          </HashLink>
        </div>
        <p className="article-body">{article.body}</p>
        <ErrorCard />
      </article>
    </LoadingCard>
  );
}
