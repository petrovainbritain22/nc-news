import {useEffect, useState} from "react";
import {getArticleArr} from "../utils/api";
import {ArticleCard} from "./ArticleCard";

export default function ArticleList({sortBy, order, topic}) {
  const [isLoading, setIsLoading] = useState(false);
  const [articleArr, setArticleArr] = useState([]);
  const topicIcons = [
    {coding: "https://cdn-icons-png.flaticon.com/512/3655/3655567.png"},
    {cooking: "https://www.freeiconspng.com/uploads/cooking-chief-icon-30.png"},
    {
      football:
        "https://pngimg.com/uploads/football_player/small/football_player_PNG129.png",
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    getArticleArr().then(({articles}) => {
      setArticleArr(articles);
      console.log(articleArr);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) return <p>Articles are loading...</p>;
  return (
    <section>
      <h2>Our Latest News</h2>
      <ul>
        {articleArr.map((article) => {
          return (
            <ArticleCard
              key={article.article_id}
              article={article}
              topicIcons={topicIcons}
            />
          );
        })}
      </ul>
    </section>
  );
}
