import {useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import {getArticlesArr} from "../utils/api";
import {ArticleCard} from "./ArticleCard";
import SortBy from "./SortBy";

export default function ArticleList() {
  const [isLoading, setIsLoading] = useState(false);
  const [articlesArr, setArticlesArr] = useState([]);
  const {slug} = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");

  useEffect(() => {
    setIsLoading(true);
    getArticlesArr(slug, sort_by, order).then(({articles}) => {
      setArticlesArr(articles);
      setIsLoading(false);
    });
  }, [slug, sort_by, order]);

  if (isLoading) return <p>Articles are loading...</p>;
  return (
    <section>
      <SortBy />
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
