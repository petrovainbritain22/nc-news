import {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import {getArticleById} from "../utils/api";
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
  let dateStr = "";
  if (article.created_at) {
    const date = new Date(Date.parse(article.created_at));
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    dateStr = "On " + date.toLocaleDateString(undefined, options);
  }

  return (
    <section>
      <article>
        <p>Posted by {article.author}</p>
        <p>{dateStr}</p>
        <h2>{article.title}</h2>
        <VoteCard votes={article.votes} article_id={article_id} />
        <p>{article.comment_count} comments</p>
        <p>{article.body}</p>
      </article>
      <form>
        <label htmlFor="">Comment</label>
        <input id="input_comment" placeholder="Your comment is here"></input>
        <button>Cancel</button>
        <button>Comment</button>
      </form>
      <Link to="">
        <p>Read comments</p>
      </Link>
    </section>
  );
}
