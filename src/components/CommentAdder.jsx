import {useContext, useEffect, useState} from "react";
import {UserContext} from "../contexts/User";
import {postComment} from "../utils/api";

export default function CommentAdder({article_id, setCommentsArr}) {
  console.log("3 in Addre");
  const {user} = useContext(UserContext);
  const [errMsg, setErrMsg] = useState(undefined);
  const [commentBody, setCommentBody] = useState("");
  const cancelHandler = (e) => {
    e.preventDefault();
    setCommentBody("");
  };
  useEffect(() => {
    console.log("errMsg changed ", errMsg);
  }, [errMsg]);
  const commentAdderHandler = (e) => {
    console.log("in adder hanlder");
    e.preventDefault();
    const newComment = {
      username: user.username,
      body: commentBody,
      comment_id: Date.now(),
    };

    if (commentBody.trim() === "") return;
    setCommentBody("");
    console.log("change list");
    setCommentsArr((currComments) => {
      return [newComment, ...currComments];
    });
    postComment(article_id, newComment)
      // postComment("ten", newComment)
      .then(({comment}) => {
        console.log("in post.then");
        setErrMsg(undefined);
      })
      .catch((err) => {
        console.log("adder err block");
        setErrMsg(err.response.data.msg);
        setCommentsArr((currComments) => {
          console.log("delete added comment");
          return currComments.slice(1);
        });
      });
  };
  return (
    <form id="form_comments" onSubmit={commentAdderHandler}>
      <label htmlFor="input_comment">Comment</label>
      <input
        id="input_comment"
        placeholder="Your comment is here"
        name="commentBody"
        value={commentBody}
        onChange={(e) => {
          setCommentBody(e.target.value);
        }}
      ></input>
      <button onClick={cancelHandler}>Cancel</button>
      <button type="submit">Comment</button>
      <span>{errMsg ? errMsg : null}</span>
    </form>
  );
}
