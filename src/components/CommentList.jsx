import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getCommentsArr} from "../utils/api";
import CommentAdder from "./CommentAdder";
import CommentCard from "./CommentCard";

import SingleArticle from "./SingleArticle";

export default function CommentList() {
  const {article_id} = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [commentsArr, setCommentsArr] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getCommentsArr(article_id).then(({comments}) => {
      const sortedComments = comments.sort((c1, c2) => {
        if (c1.created_at > c2.created_at) return -1;
        else return 1;
      });
      setCommentsArr(sortedComments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Comments are loading...</p>;
  return (
    <section>
      <SingleArticle />
      <CommentAdder article_id={article_id} setCommentsArr={setCommentsArr} />
      <ul>
        {commentsArr.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard
                comment={comment}
                commentsArr={commentsArr}
                setCommentsArr={setCommentsArr}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
