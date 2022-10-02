import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../../contexts/User";
import MenuCard from "./MenuCard";

export default function Header() {
  const {user} = useContext(UserContext);
  return (
    <header className="App-header">
      <figure className="header_figure_user">
        <img src={user.avatar_url} />
        <figcaption>Hi, {user.name}</figcaption>
      </figure>
      <Link to="/">
        <h1 id="h_siteTitle">
          N<span>C</span>EWS
        </h1>
      </Link>
      <MenuCard />
    </header>
  );
}
