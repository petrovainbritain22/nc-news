import {Link} from "react-router-dom";
import TopicList from "./TopicList";
export default function Header() {
  const title = "NC News";
  return (
    <header className="App-header">
      {/* here will be a component insted of <p> */}
      <p>Profile</p>
      <Link to="/">
        <h1>{title}</h1>
      </Link>

      <TopicList />
    </header>
  );
}
