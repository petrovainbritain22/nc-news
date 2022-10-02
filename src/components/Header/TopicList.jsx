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
    <nav>
      {topicsArr.map((topic) => {
        const url = "/topics/" + topic.slug;
        return (
          <Link key={topic.slug} to={url}>
            {topic.slug}
          </Link>
        );
      })}
    </nav>
  );
}
