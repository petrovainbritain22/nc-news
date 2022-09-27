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
      console.log(articleArr);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) return <p>Articles are loading...</p>;
  return (
    <section>
      <h2>Our Latest News</h2>
      <ol>
        {articleArr.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ol>
    </section>
  );
}
