import {useContext, useEffect, useState} from "react";
import {UserContext} from "../contexts/User";
import {postComment} from "../utils/api";

import {ErrContext} from "../contexts/Error";
export default function CommentAdder({article_id, setCommentsArr}) {
  console.log("3 in Addre");
  const {user} = useContext(UserContext);
  const {setErr} = useContext(ErrContext);
  const [commentBody, setCommentBody] = useState("");
  const cancelHandler = (e) => {
    e.preventDefault();
    setCommentBody("");
  };

  const commentAdderHandler = (e) => {
    console.log("in adder hanlder");
    e.preventDefault();
    const newComment = {
      username: user.username,
      body: commentBody,
      comment_id: Date.now(),
      isNew: true,
    };

    if (commentBody.trim() === "") {
      setCommentBody("");
      return;
    }
    setCommentBody("");
    console.log("change list");
    setCommentsArr((currComments) => {
      return [newComment, ...currComments];
    });
    postComment(article_id, newComment)
      // postComment("ten", newComment)
      .then(({comment}) => {
        console.log("in post.then");
        setErr(() => {
          return {msg: null};
        });
      })
      .catch((err) => {
        console.log("adder err block");
        setErr(() => {
          return {msg: err.response.data.msg};
        });
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
    </form>
  );
}
