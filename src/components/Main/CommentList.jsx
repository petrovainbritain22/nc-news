import {useContext, useEffect, useState} from "react";
import {ErrContext} from "../../contexts/Error";
import {useParams} from "react-router-dom";
import ErrorCard from "../ErrorCard";
import LoadingCard from "../LoadingCard";
import SingleArticle from "./SingleArticle";
import CommentAdder from "../Comment/CommentAdder";
import CommentCard from "../Comment/CommentCard";
import {getCommentsArr} from "../../utils/api";

export default function CommentList() {
  const [commentsArr, setCommentsArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNewAdded, setIsNewAdded] = useState(false);

  const {setErr} = useContext(ErrContext);
  const {article_id} = useParams();

  useEffect(() => {
    setIsNewAdded(false);
    setIsLoading(true);
    getCommentsArr(article_id)
      .then(({comments}) => {
        setErr(() => {
          return {msg: null};
        });
        const sortedComments = comments.sort((c1, c2) => {
          if (c1.created_at > c2.created_at) return -1;
          else return 1;
        });
        setCommentsArr(sortedComments);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErr(() => {
          return {msg: err.response.data.msg};
        });
      });
  }, [isNewAdded]);

  return (
    <LoadingCard isLoading={isLoading}>
      <SingleArticle />
      <CommentAdder
        article_id={article_id}
        setCommentsArr={setCommentsArr}
        setIsNewAdded={setIsNewAdded}
      />
      <ul className="ul_comments">
        {commentsArr.map((comment) => {
          return (
            <CommentCard
              key={`component_${comment.comment_id}`}
              comment={comment}
              setCommentsArr={setCommentsArr}
            />
          );
        })}
      </ul>
    </LoadingCard>
  );
}
