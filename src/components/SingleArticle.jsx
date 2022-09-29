import {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {getArticleById} from "../utils/api";
import {toDateStr} from "../utils/toDateStr";
import VoteCard from "./VoteCard";

export default function SingleArticle() {
  const {article_id} = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState({});

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then(({article}) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Article is loading...</p>;
  const dateStr = toDateStr(article.created_at);

  return (
    <section>
      <article>
        <h2>
          Posted by {article.author}
          {dateStr}
        </h2>
        <h3>{article.title}</h3>
        <VoteCard votes={article.votes} article_id={article_id} />
        <HashLink smooth to={`/articles/${article_id}/comments#list-comments`}>
          {article.comment_count} comments
        </HashLink>

        <p>{article.body}</p>
      </article>
      <form>
        <label htmlFor="">Comment</label>
        <input id="input_comment" placeholder="Your comment is here"></input>
        <button>Cancel</button>
        <button>Comment</button>
      </form>
      <HashLink smooth to={`/articles/${article_id}/comments#list-comments`}>
        <p>Read comments</p>
      </HashLink>
    </section>
  );
}
