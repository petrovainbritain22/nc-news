import {useState} from "react";
import {patchArticleVotes, patchCommentVotes} from "../utils/api";

export default function VoteCard(props) {
  const [newVotes, setNewVotes] = useState(props.votes);

  const [errMsg, setErrMsg] = useState(undefined);
  const voteUpHandler = (e) => {
    updateVote({inc_votes: 1});
  };
  const voteDownHandler = (e) => {
    updateVote({inc_votes: -1});
  };
  const updateVote = (vote) => {
    setErrMsg(undefined);
    const isNumber = typeof vote.inc_votes === "number";
    if (isNumber) {
      setNewVotes((currVotes) => {
        return currVotes + vote.inc_votes;
      });
    }
    let votePromise;
    if (props.article_id) {
      console.log(props.article_id, "art");
      votePromise = patchArticleVotes(props.article_id, vote);
    } else if (props.comment_id) {
    }
    if (votePromise) {
      votePromise.then().catch((err) => {
        const isNumber = typeof vote.inc_votes === "number";
        if (isNumber) {
          setNewVotes((currVotes) => {
            return currVotes - vote.inc_votes;
          });
        }
        setErrMsg(err.response.data.msg);
      });
    }
  };

  return (
    <p>
      <button onClick={voteUpHandler}>Up</button>
      {newVotes} votes
      <button onClick={voteDownHandler}>Down</button>
      <span>{errMsg ? errMsg : null}</span>
    </p>
  );
}
