import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getArticlesArr} from "../utils/api";
import {ArticleCard} from "./ArticleCard";

export default function ArticleList() {
  const [isLoading, setIsLoading] = useState(false);
  const [articlesArr, setArticlesArr] = useState([]);
  const {slug} = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticlesArr(slug).then(({articles}) => {
      setArticlesArr(articles);
      setIsLoading(false);
    });
  }, [slug]);

  if (isLoading) return <p>Articles are loading...</p>;
  return (
    <section>
      <h2>Our Latest News</h2>
      <ul>
        {articlesArr.map((article) => {
          return (
            <li key={article.article_id} className="li_ArticleCard">
              <ArticleCard article={article} />;
            </li>
          );
        })}
      </ul>
    </section>
  );
}
