import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getTopicsArr} from "../../utils/api";

export default function TopicList() {
  const [topicsArr, setTopicsArr] = useState([]);

  useEffect(() => {
    getTopicsArr().then(({topics}) => {
      setTopicsArr(topics);
    });
  }, []);

  return (
    <nav className="nav-container">
      <ul className="ul_topics">
        <Link className="nav-item" key="all_topics" to={"/"}>
          <strong>All</strong>
        </Link>
        {topicsArr.map((topic) => {
          return (
            <Link
              className="nav-item"
              key={topic.slug}
              to={"/topics/" + topic.slug}
            >
              {topic.slug[0].toUpperCase() + topic.slug.slice(1)}
            </Link>
          );
        })}
      </ul>
      <Link
        style={{color: "red", fontWeight: "400"}}
        className="nav-item"
        to={"/users"}
      >
        Users
      </Link>
    </nav>
  );
}
