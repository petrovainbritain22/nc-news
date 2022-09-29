import {toDateStr} from "../utils/toDateStr";
import SingleArticle from "./SingleArticle";

export default function CommentCard({comment}) {
  const dateStr = toDateStr(comment.created_at);
  return (
    <section>
      <p>{comment.body}</p>
      <p>{dateStr}</p>

      <p>
        <button>Up</button>
        {comment.votes} votes
        <button>Down</button>
      </p>
    </section>
  );
}
