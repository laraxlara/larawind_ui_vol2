import React from "react";
import NavLink from "./NavLink";
import { navbarLinks } from "./NavbarLinks";

function Navbar() {
  return (
    <nav className="p-2">
      <ul className="space-y-2 font-medium">
        {navbarLinks.map((link) => {
          return (
            <NavLink
              key={link.id}
              href={link.href}
              name={link.name}
              svg={link.svg}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
