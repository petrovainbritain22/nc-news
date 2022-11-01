import {toDateStr} from "../../utils/toDateStr";
import {UserContext} from "../../contexts/User";
import CommentRemover from "./CommentRemover";
import {useContext} from "react";

export default function CommentCard({comment, setCommentsArr}) {
  console.log(comment.author);
  const {user} = useContext(UserContext);
  console.log(user.username === comment.author);
  return (
    <li key={`li_${comment.comment_id}`} className="li_comment">
      <p>{comment.body}</p>
      <div className="flex-between italic">
        <span className="grey">{toDateStr(comment.created_at, true)}</span>
        {user.username === comment.author ? (
          <CommentRemover comment={comment} setCommentsArr={setCommentsArr} />
        ) : (
          <span className="grey"> by {comment.author}</span>
        )}
      </div>
    </li>
  );
}
