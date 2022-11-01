import {useContext, useEffect, useState} from "react";
import {ErrContext} from "../../contexts/Error";
import {useParams} from "react-router-dom";

import {ArticleCard} from "../Article/ArticleCard";
import SortBy from "../Article/SortBy";
import Order from "../Article/Order";

import {getArticlesArr} from "../../utils/api";
import LoadingCard from "../LoadingCard";
import ErrorCard from "../ErrorCard";

export default function ArticleList() {
  const [isLoading, setIsLoading] = useState(false);
  const [articlesArr, setArticlesArr] = useState([]);
  const [order, setOrder] = useState("desc");
  const [sort_by, setSort_by] = useState("created_at");

  const {setErr} = useContext(ErrContext);
  const {slug} = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticlesArr(slug, sort_by, order)
      .then(({articles}) => {
        setErr(() => {
          return {msg: null};
        });
        setArticlesArr(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErr(() => {
          return {msg: err.response.data.msg};
        });
      });
  }, [slug, sort_by, order]);

  return (
    <LoadingCard isLoading={isLoading}>
      <ErrorCard />
      <form id="form_sort_order">
        <SortBy sort_by={sort_by} setSort_by={setSort_by} />
        <Order order={order} setOrder={setOrder} />
      </form>
      <h2 id="h_articles">
        North
        <span
          style={{
            color: "red",
            fontFamily: "Euphoria Script",
            fontSize: "2em",
          }}
        >
          C
        </span>
        oder's News
      </h2>
      <ul>
        {articlesArr.map((article) => {
          return (
            <li key={article.article_id}>
              <ArticleCard article={article} />
            </li>
          );
        })}
      </ul>
    </LoadingCard>
  );
}
