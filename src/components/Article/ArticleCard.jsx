import {Link} from "react-router-dom";
import thumbUp from "../../svg/thumbUp.svg";
import thumbDown from "../../svg/thumbDown.svg";
export const ArticleCard = ({article}) => {
  const topicIcons = {
    coding: "https://cdn-icons-png.flaticon.com/512/3655/3655567.png",
    cooking: "https://www.freeiconspng.com/uploads/cooking-chief-icon-30.png",
    football:
      "https://pngimg.com/uploads/football_player/small/football_player_PNG129.png",
  };

  return (
    <>
      <Link to={"/articles/" + article.article_id} className="row">
        <img
          src={topicIcons[article.topic]}
          width="50px"
          className="img_column a"
        ></img>
        <div className="column">
          <h3>{article.title}</h3>
          <div className="div_votes">
            <img
              className="img_vote"
              src={article.votes >= 0 ? thumbUp : thumbDown}
              alt="Heart icon"
            />
            {article.votes}
            <span>{article.comment_count} comments</span>
          </div>
        </div>
      </Link>
    </>
  );
};
