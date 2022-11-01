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
    </nav>
  );
}
