export const ArticleCard = ({article}) => {
  const topicIcons = {
    coding: "https://cdn-icons-png.flaticon.com/512/3655/3655567.png",
    cooking: "https://www.freeiconspng.com/uploads/cooking-chief-icon-30.png",
    football:
      "https://pngimg.com/uploads/football_player/small/football_player_PNG129.png",
  };
  return (
    <li className="li_ArticleCard">
      <img src={topicIcons[article.topic]} width="50px"></img>
      <h3>{article.title}</h3>
      <div>
        <p>{article.votes} votes</p>
        <p>{article.comment_count} comments</p>
      </div>
    </li>
  );
};
