import {useState} from "react";
import {toDateStr} from "../utils/toDateStr";
import VoteCard from "./VoteCard";
import CommentRemover from "./CommentRemover";
export default function CommentCard(props) {
  const [errMsg, setErrMsg] = useState(undefined);
  const dateStr = toDateStr(props.comment.created_at);
  return (
    <section>
      <p>{props.comment.body}</p>
      <CommentRemover
        comment={props.comment}
        commentsArr={props.commentsArr}
        setCommentsArr={props.setCommentsArr}
        setErrMsg={setErrMsg}
        errMsg={errMsg}
      />
      <p>{dateStr}</p>
      <VoteCard
        votes={props.comment.votes}
        comment_id={props.comment.comment_id}
      />
    </section>
  );
}
