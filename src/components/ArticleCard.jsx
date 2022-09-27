export const ArticleCard = ({article, topicIconSrc}) => {
  return (
    <li className="li_ArticleCard">
      <img src={topicIconSrc} width="50px"></img>
      <h3>{article.title}</h3>
      <div>
        <p>{article.votes} votes</p>
        <p>{article.comment_count} comments</p>
      </div>
    </li>
  );
};
