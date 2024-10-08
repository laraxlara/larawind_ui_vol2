import { FC } from "react";
import NavLinkIcon from "./NavLinkIcon";

export interface NavbarLink {
  id: number;
  name: string;
  href: string;
  svg: FC<{}>;
}

export const navbarLinks: NavbarLink[] = [
  {
    id: 1,
    name: "Hero",
    href: "/heros",
    svg: NavLinkIcon,
  },
  {
    id: 2,
    name: "Header",
    href: "/features",
    svg: NavLinkIcon,
  },
  {
    id: 3,
    name: "Content",
    href: "#",
    svg: NavLinkIcon,
  },
];
