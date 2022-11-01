import {useContext, useState} from "react";
import {ErrContext} from "../../contexts/Error";
import {patchArticleVotes} from "../../utils/api";

import thumbUp from "../../svg/thumbUp.svg";
import thumbDown from "../../svg/thumbDown.svg";
import {useParams} from "react-router-dom";

export default function ArticleVotes(props) {
  const [newVotes, setNewVotes] = useState(props.votes);
  const {article_id} = useParams();
  const {setErr} = useContext(ErrContext);

  const voteUpHandler = (e) => {
    e.preventDefault();
    updateVote({inc_votes: 1});
  };
  const voteDownHandler = (e) => {
    updateVote({inc_votes: -1});
  };

  const updateVote = (vote) => {
    setErr(() => {
      return {msg: null};
    });
    setNewVotes((currVotes) => {
      return currVotes + vote.inc_votes;
    });
    patchArticleVotes(article_id, vote).catch((err) => {
      setNewVotes((currVotes) => {
        return props.votes;
      });
      setErr(() => {
        return {msg: err.response.data.msg};
      });
    });
  };

  return (
    <figure className="figure-votes">
      <img onClick={voteUpHandler} src={thumbUp} alt="Thumb icon" />
      <figcaption>{newVotes} votes</figcaption>
      <img
        onClick={voteDownHandler}
        src={thumbDown}
        alt="Red thumb down icon"
      />
    </figure>
  );
}
