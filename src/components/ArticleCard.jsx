export const ArticleCard = ({article}) => {
  return (
    <li>
      {/* How to make a link on the folder with images?
        <figure>
        <img src="images/topics/transp-icons/coding.png" alt="Icon coding" />
        <figcaption></figcaption>
      </figure> */}
      <h3>{article.title}</h3>
      <p>{article.votes} votes</p>
      <p>{article.comment_count} comments</p>
    </li>
  );
};
