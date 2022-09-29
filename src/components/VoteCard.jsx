import {useEffect, useState} from "react";
import {patchArticleVotes} from "../utils/api";

export default function VoteCard({votes, article_id}) {
  const [newVotes, setNewVotes] = useState(votes);

  const [errMsg, setErrMsg] = useState(undefined);
  const voteUpHandler = (e) => {
    updateArticleVote({inc_votes: 1});
  };
  const voteDownHandler = (e) => {
    updateArticleVote({inc_votes: -1});
  };
  const updateArticleVote = (vote) => {
    setErrMsg(undefined);
    setNewVotes((currVotes) => {
      return currVotes + vote.inc_votes;
    });
    patchArticleVotes(article_id, vote)
      .then(({article}) => {})
      .catch((err) => {
        setNewVotes((currVotes) => {
          return currVotes - vote.inc_votes;
        });
        setErrMsg(err.response.data.msg);
      });
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
