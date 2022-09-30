import {useContext, useState} from "react";
import {UserContext} from "../contexts/User";
import {postComment} from "../utils/api";

export default function CommentAdder({article_id, setCommentsArr}) {
  const {user} = useContext(UserContext);
  const [errMsg, setErrMsg] = useState(undefined);
  const [newComment, setNewComment] = useState("");
  const cancelHandler = (e) => {
    e.preventDefault();
    setNewComment("");
  };

  const commentAdderHandler = (e) => {
    e.preventDefault();
    const comment = {
      username: user.username,
      body: newComment,
      votes: 0,
      created_at: new Date().toJSON(),
      comment_id: Date.now(),
    };
    setNewComment("");
    setErrMsg(undefined);
    if (comment.body.trim() === "") return;
    setCommentsArr((currComments) => {
      return [comment, ...currComments];
    });
    postComment(article_id, comment)
      // postComment("ten", comment)
      .then()
      .catch((err) => {
        setErrMsg(err.response.data.msg);
        setCommentsArr((currComments) => {
          return [currComments.slice(1)];
        });
      });
  };
  return (
    <form id="form_comments">
      <label htmlFor="input_comment">Comment</label>
      <input
        id="input_comment"
        placeholder="Your comment is here"
        value={newComment}
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
      ></input>
      <button onClick={cancelHandler}>Cancel</button>
      <button onClick={commentAdderHandler}>Comment</button>
      <span>{errMsg ? errMsg : null}</span>
    </form>
  );
}
