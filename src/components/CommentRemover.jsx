import {deleteCommentById} from "../utils/api";
import {useContext, useEffect, useState} from "react";
import {ErrContext} from "../contexts/Error";
import ErrorCard from "./ErrorCard";
export default function CommentRemover({comment, setCommentsArr}) {
  console.log("in commentRemover");
  const urlIconBin = "https://cdn-icons-png.flaticon.com/512/206/206529.png";
  const {setErr} = useContext(ErrContext);
  const deleteCommentHandler = (e) => {
    console.log("delete Handler");
    console.log(comment.isNew);
    setCommentsArr((currCommentsArr) => {
      console.log("in setCommentsArr -delete");
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
        console.log(err.response.data);
        setErr(() => {
          return {msg: err.response.data.msg};
        });
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
