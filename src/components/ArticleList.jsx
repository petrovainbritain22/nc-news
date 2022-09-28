import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getArticleArr} from "../utils/api";
import {ArticleCard} from "./ArticleCard";

export default function ArticleList() {
  const [isLoading, setIsLoading] = useState(false);
  const [articleArr, setArticleArr] = useState([]);
  const {slug} = useParams();

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
