import {deleteCommentById} from "../../utils/api";
import {useContext} from "react";
import {ErrContext} from "../../contexts/Error";

export default function CommentRemover({comment, setCommentsArr}) {
  const {setErr} = useContext(ErrContext);

  const deleteCommentHandler = (e) => {
    setCommentsArr((currCommentsArr) => {
      return currCommentsArr.filter((c) => {
        return c.comment_id !== comment.comment_id;
      });
    });
    if (comment.isNew) return;
    deleteCommentById(comment.comment_id)
      .then(() => {
        setErr(() => {
          return {msg: null};
        });
        console.log("in then.delete");
      })
      .catch((err) => {
        setCommentsArr((currCommentsArr) => {
          return [comment, ...currCommentsArr];
        });
        setErr(() => {
          return {msg: err.response.data.msg};
        });
      });
  };
  return (
    <svg
      onClick={deleteCommentHandler}
      className="btn_icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="red"
      viewBox="0 0 24 24"
    >
      <path d="M18.5 15c-2.484 0-4.5 2.015-4.5 4.5s2.016 4.5 4.5 4.5c2.482 0 4.5-2.015 4.5-4.5s-2.018-4.5-4.5-4.5zm2.5 5h-5v-1h5v1zm-5-11v4.501c-.748.313-1.424.765-2 1.319v-5.82c0-.552.447-1 1-1s1 .448 1 1zm-4 0v10c0 .552-.447 1-1 1s-1-.448-1-1v-10c0-.552.447-1 1-1s1 .448 1 1zm1.82 15h-11.82v-18h2v16h8.502c.312.749.765 1.424 1.318 2zm-6.82-16c.553 0 1 .448 1 1v10c0 .552-.447 1-1 1s-1-.448-1-1v-10c0-.552.447-1 1-1zm14-4h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711v2zm-1 2v7.182c-.482-.115-.983-.182-1.5-.182l-.5.025v-7.025h2z" />
    </svg>
  );
}
