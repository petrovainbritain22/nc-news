import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getTopicArr} from "../utils/api";
export default function TopicList() {
  const [topicArr, setTopicArr] = useState([]);
  useEffect(() => {
    getTopicArr().then(({topics}) => {
      setTopicArr(topics);
    });
  }, []);

  return (
    <nav>
      {topicArr.map((topic) => {
        const url = `/api/articles/?topic=${topic.slug}`;
        return (
          <Link key={topic.slug} to={url}>
            {topic.slug}
          </Link>
        );
      })}
    </nav>
  );
}
