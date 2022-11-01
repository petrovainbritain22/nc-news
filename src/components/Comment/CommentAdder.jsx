import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../contexts/User";
import {postComment} from "../../utils/api";
import {ErrContext} from "../../contexts/Error";

export default function CommentAdder({
  article_id,
  setCommentsArr,
  setIsNewAdded,
}) {
  const [commentBody, setCommentBody] = useState("");
  const {user} = useContext(UserContext);
  const {setErr} = useContext(ErrContext);

  const commentAdderHandler = (e) => {
    e.preventDefault();
    const newComment = {
      username: user.username,
      body: commentBody,
      comment_id: Date.now(),
      isNew: true,
    };
    setCommentBody("");
    if (newComment.body.trim() === "") {
      return;
    }
    setCommentsArr((currComments) => {
      return [newComment, ...currComments];
    });
    postComment(article_id, newComment)
      .then(({comment}) => {
        setIsNewAdded(true);
        setErr(() => {
          return {msg: null};
        });
      })
      .catch((err) => {
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
      <label htmlFor="input_comments"></label>
      <textarea
        id="textarea_comment"
        placeholder="Your comment is here"
        name="commentBody"
        value={commentBody}
        onChange={(e) => {
          setCommentBody(e.target.value);
        }}
      ></textarea>
      <button type="submit">Comment</button>
    </form>
  );
}
