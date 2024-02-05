import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";

export const Navabar = () => {
  const [currentNav, setCurrentNav] = useState({
    title: "Home",
    url: "/",
  });
  const menuBar = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Services",
      url: "/services",
    },
    {
      title: "Gallery",
      url: "/gallery",
    },
    {
      title: "Contact Us",
      url: "/contact",
    },
  ];
  return (
    <ul className="navbar">
      {menuBar.map((menu) => (
        <li
          key={menu.title}
          onKeyDown={() => {}}
          onClick={() => setCurrentNav(menu)}
          className={currentNav.title === menu.title && "navbar__selected"}
        >
          <Link to={menu.url}>{menu.title}</Link>
        </li>
      ))}
    </ul>
  );
};
