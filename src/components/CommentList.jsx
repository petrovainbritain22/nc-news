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
      setCommentsArr(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Comments are loading...</p>;
  return (
    <section>
      <SingleArticle />
      <ul id="list-comments">
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
