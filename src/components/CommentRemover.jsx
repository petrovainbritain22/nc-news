import {deleteCommentById} from "../utils/api";
import {useContext, useEffect, useState} from "react";
export default function CommentRemover({comment, setCommentsArr}) {
  console.log("in commentRemover");
  const urlIconBin = "https://cdn-icons-png.flaticon.com/512/206/206529.png";
  const [errMsg, setErrMsg] = useState(undefined);
  const deleteCommentHandler = (e) => {
    console.log("delete Handler");
    setCommentsArr((currCommentsArr) => {
      console.log("in setCommentsArr -delete");
      return [
        currCommentsArr.filter((c) => {
          return c.comment_id !== comment.comment_id;
        }),
      ];
    });
    if (comment.isNew) return;
    // deleteCommentById(comment.comment_id + 10000000)
    deleteCommentById(comment.comment_id)
      .then(() => {
        setErrMsg(undefined);
        console.log("in then.delete");
      })
      .catch((err) => {
        setCommentsArr((currCommentsArr) => {
          return [comment, ...currCommentsArr];
        });
        console.log(comment.isNew);
        setErrMsg(err.response.data.msg);
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
