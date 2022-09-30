import {deleteCommentById} from "../utils/api";

export default function CommentRemover(props) {
  const urlIconBin = "https://cdn-icons-png.flaticon.com/512/206/206529.png";

  const deleteCommentHandler = (e) => {
    // e.preventDefault();
    const index = props.commentsArr.findIndex(
      (c) => c.comment_id === props.comment.comment_id
    );

    props.setCommentsArr((currCommentsArr) => {
      return [
        ...currCommentsArr.slice(0, index),
        ...currCommentsArr.slice(index + 1),
      ];
    });

    // deleteCommentById(props.comment.comment_id + 10000000)
    deleteCommentById(props.comment.comment_id)
      .then()
      .catch((err) => {
        props.setCommentsArr((currCommentsArr) => {
          return [
            ...currCommentsArr.slice(0, index),
            props.comment,
            ...currCommentsArr.slice(index),
          ];
        });
        props.setErrMsg(err.response.data.msg);
        console.log(props.errMsg);
      });
  };
  return (
    <span>
      <button onClick={deleteCommentHandler}>
        <img className="img_delete" src={urlIconBin} alt="icon rubbish bin" />
      </button>
      <span>{props.errMsg ? props.errMsg : null}</span>
    </span>
  );
}
