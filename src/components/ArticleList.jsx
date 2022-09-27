import {useEffect, useState} from "react";
import {getArticleArr} from "../utils/api";
import {ArticleCard} from "./ArticleCard";

export default function ArticleList({sortBy, order, topic}) {
  const [isLoading, setIsLoading] = useState(false);
  const [articleArr, setArticleArr] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticleArr().then(({articles}) => {
      setArticleArr(articles);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) return <p>Articles are loading...</p>;
  return (
    <section>
      <h2>Our Latest News</h2>
      <ul>
        {articleArr.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </section>
  );
}
