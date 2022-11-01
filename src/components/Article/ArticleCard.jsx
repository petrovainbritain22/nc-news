import {Link} from "react-router-dom";
import thumbUp from "../../svg/thumbUp.svg";
import thumbDown from "../../svg/thumbDown.svg";
import comments from "../../svg/comments.svg";

export const ArticleCard = ({article}) => {
  const topicIcons = {
    coding: "https://cdn-icons-png.flaticon.com/512/3655/3655567.png",
    cooking:
      "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/37893/pasta-boil-clipart-xl.png",
    football: "https://cdn-icons-png.flaticon.com/512/123/123495.png",
  };

  return (
    <>
      <Link to={"/articles/" + article.article_id} className="link_article">
        <img
          src={topicIcons[article.topic]}
          width="20%"
          className="img_topic"
          alt="Hobby icon"
        ></img>
        <div className="div_articleData">
          <h3>{article.title}</h3>
          <div className="row">
            <figure className="col-votes">
              <img
                src={article.votes >= 0 ? thumbUp : thumbDown}
                alt="Thumb icon"
              />
              <figcaption>{article.votes}</figcaption>
            </figure>
            <figure className="col-comments">
              <img src={comments} alt="Comment icon" />
              <figcaption>{article.comment_count}</figcaption>
            </figure>
          </div>
        </div>
      </Link>
    </>
  );
};
