import {toDateStr} from "../utils/toDateStr";
import SingleArticle from "./SingleArticle";
import VoteCard from "./VoteCard";

export default function CommentCard({comment}) {
  const dateStr = toDateStr(comment.created_at);
  return (
    <section>
      <p>{comment.body}</p>
      <p>{dateStr}</p>

      <VoteCard votes={comment.votes} comment_id={comment.comment_id} />
    </section>
  );
}
