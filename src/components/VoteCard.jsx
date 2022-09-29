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
    patchArticleVotes(article_id, vote)
      .then(({article}) => {
        setNewVotes((currVotes) => {
          return currVotes + vote.inc_votes;
        });
      })
      .catch((err) => {
        setErrMsg(err.response.data.msg);
      });
  };
  useEffect(() => {
    setErrMsg(undefined);
  }, [newVotes]);

  return (
    <p>
      <button onClick={voteUpHandler}>Up</button>
      {newVotes} votes
      <button onClick={voteDownHandler}>Down</button>
      <span>{errMsg ? errMsg : null}</span>
    </p>
  );
}
