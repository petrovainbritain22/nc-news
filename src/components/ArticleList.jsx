import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getArticleArr} from "../utils/api";
import {ArticleCard} from "./ArticleCard";

export default function ArticleList({sortBy, order}) {
  let slug = undefined;
  const [isLoading, setIsLoading] = useState(false);
  const [articleArr, setArticleArr] = useState([]);
  const {search} = useLocation();

  if (search.includes("topic")) {
    slug = search.split("=")[1];
  }

  useEffect(() => {
    setIsLoading(true);
    getArticleArr(slug).then(({articles}) => {
      setArticleArr(articles);
      setIsLoading(false);
    });
  }, [slug]);

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
