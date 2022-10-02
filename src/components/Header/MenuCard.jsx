import {useState} from "react";
import TopicList from "./TopicList";

export default function MenuCard() {
  const showMenu = "M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z";
  const hideMenu =
    "M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z";
  const [menu, setMenu] = useState(showMenu);

  const openCloseMenuHanlder = (e) => {
    setMenu((currMenu) => {
      return currMenu === showMenu ? hideMenu : showMenu;
    });
  };
  return (
    <nav>
      <svg
        onClick={openCloseMenuHanlder}
        className="btn_menu"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d={menu} />
      </svg>
      {menu === hideMenu ? <TopicList /> : null}
    </nav>
  );
}
