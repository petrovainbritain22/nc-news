import {deleteCommentById} from "../utils/api";

export default function CommentRemover(props) {
  const urlIconBin = "https://cdn-icons-png.flaticon.com/512/206/206529.png";

  const deleteCommentHandler = (e) => {
    // e.preventDefault();

    props.setCommentsArr((currCommentsArr) => {
      return [
        currCommentsArr.filter((c) => {
          return c.comment_id !== props.comment.comment_id;
        }),
      ];
    });
    if (props.comment.isNew) return;
    // deleteCommentById(props.comment.comment_id + 10000000)
    deleteCommentById(props.comment.comment_id).catch((err) => {
      props.setCommentsArr((currCommentsArr) => {
        return [props.comment, ...currCommentsArr];
      });
      console.log(props.comment.isNew);
      props.setErrMsg(err.response.data.msg);
    });
  };
  return (
    <span>
      <button onClick={deleteCommentHandler}>
        <img className="img_delete" src={urlIconBin} alt="icon rubbish bin" />
      </button>
    </span>
  );
}
