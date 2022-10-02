import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../../contexts/User";
import MenuCard from "./MenuCard";
import TopicList from "./TopicList";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user} = useContext(UserContext);
  return (
    <header className="App-header">
      <div>
        <figure>
          <img id="img_profile-main" src={user.avatar_url} />
          <figcaption>Hi, {user.name}</figcaption>
        </figure>
        <Link to="/">
          <h1 id="h_siteTitle">
            N<span className="c">C</span>EWS
          </h1>
        </Link>
        <MenuCard isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      {isMenuOpen ? <TopicList /> : null}
    </header>
  );
}
