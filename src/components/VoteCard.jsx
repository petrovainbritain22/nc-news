import {useState} from "react";
import {patchArticleVotes} from "../utils/api";

export default function VoteCard(props) {
  const urlIconThumbDown =
    "https://www.pngmart.com/files/10/Dislike-PNG-File.png";
  const urlIconThumbUp =
    "https://listimg.pinclipart.com/picdir/s/11-119222_thumbs-up-icon-green-th-clip-art-green.png";

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
      votePromise = patchArticleVotes(props.article_id, vote);
      // votePromise = patchArticleVotes("ten", vote);
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
    <span>
      <button onClick={voteUpHandler}>
        <img
          className="img_like"
          src={urlIconThumbUp}
          alt="Green thumb up icon"
        />
      </button>
      {newVotes} votes
      <button onClick={voteDownHandler}>
        {" "}
        <img
          className="img_dislike"
          src={urlIconThumbDown}
          alt="Green thumb up icon"
        />
      </button>
      <span>{errMsg ? errMsg : null}</span>
    </span>
  );
}
