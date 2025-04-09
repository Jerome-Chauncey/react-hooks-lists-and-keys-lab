import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksWithKeys = links.map((link) => {
    return (
      
        <a key={link} href={`#${link}`}>
          {link}
        </a>
      
    );
  });

  return (
    <div>
      <nav>{linksWithKeys}</nav>
    </div>
  )
}

export default NavBar;
