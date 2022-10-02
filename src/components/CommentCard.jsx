import {useState} from "react";
import {toDateStr} from "../utils/toDateStr";
import VoteCard from "./VoteCard";
import CommentRemover from "./CommentRemover";

export default function CommentCard({comment, setCommentsArr}) {
  return (
    <li key={`li_${comment.comment_id}`}>
      <p>{comment.body}</p>
      <CommentRemover comment={comment} setCommentsArr={setCommentsArr} />
      <p>{toDateStr(comment.created_at)}</p>
    </li>
  );
}
