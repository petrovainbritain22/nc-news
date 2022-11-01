import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../../contexts/User";
import MenuCard from "./MenuCard";
import TopicList from "./TopicList";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user} = useContext(UserContext);
  return (
    <header>
      <div id="header">
        <figure className="figure_user">
          <img src={user.avatar_url} alt="User avatar" width="20rem" />
          <figcaption>Hi {user.name.match(/\w*/)}</figcaption>
        </figure>

        <Link to="/">
          <h1 id="h-title">
            N
            <span
              style={{
                color: "red",
                fontFamily: "Euphoria Script",
                fontSize: "2em",
              }}
            >
              C
            </span>
            EWS
          </h1>
        </Link>
        <MenuCard
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          className="col-nav"
        />
      </div>
      {isMenuOpen ? <TopicList /> : null}
    </header>
  );
}
