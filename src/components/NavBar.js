import React from "react";

const links = ["home", "about", "projects"];

function NavBar() {

  return <nav>
    <a key = "home" href= "#home">{links[0]}</a>
    <a key = "about" href= "#about">{links[1]}</a>
    <a key = "projects" href= "#projects">{links[2]}</a>
  </nav>;
}

export default NavBar;