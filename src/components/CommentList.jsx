import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getCommentsArr} from "../utils/api";
import CommentCard from "./CommentCard";

import SingleArticle from "./SingleArticle";

export default function CommentList() {
  const [isLoading, setIsLoading] = useState(false);
  const [commentsArr, setCommentsArr] = useState([]);
  const {article_id} = useParams();

  useEffect(() => {
    setIsLoading(true);
    getCommentsArr(article_id).then(({comments}) => {
      const sortedComments = comments.sort((c1, c2) => {
        if (c1.created_at > c2.created_at) return -1;
      });
      setCommentsArr(sortedComments);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Comments are loading...</p>;
  return (
    <section>
      <SingleArticle />
      <form id="input-comments">
        <label htmlFor="">Comment</label>
        <input id="input_comment" placeholder="Your comment is here"></input>
        <button>Cancel</button>
        <button>Comment</button>
      </form>
      <ul>
        {commentsArr.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard comment={comment} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
