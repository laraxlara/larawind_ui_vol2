import React, { FC } from "react";
import Link from "next/link";

type Props = {
  href: string;
  name: string;
  svg: FC<{}>;
};

function NavLink(props: Props) {
  return (
    <li className="my-2 p-4 hover:bg-opacity-50 hover:bg-[#19FFBD] active:bg-[#19FFBD] focus:outline-none focus:ring focus:ring-[#19FFBD] rounded-xl hover:shadow-xl cursor-pointer">
      <Link
        href={props.href}
        className="flex items-center p-2 text-gray-700 rounded-lg group uppercase"
      >
        {/* <>{props.svg}</> */}
        <span className="ms-3">{props.name}</span>
      </Link>
    </li>
  );
}

export default NavLink;
