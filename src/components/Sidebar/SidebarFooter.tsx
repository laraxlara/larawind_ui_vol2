import React from "react";

function SidebarFooter() {
  return (
    <footer className="absolute flex flex-col gap-2 p-4 bottom-0 left-0 h-24 z-2 bg-gray-100 rounded-r-xl w-full ">
      <div className="text-gray-400 flex gap-2">
        <a href="#" className="cursor-pointer hover:text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-instagram"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M16.5 7.5l0 .01"></path>
          </svg>
        </a>
        <a href="#" className="cursor-pointer hover:text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-pinterest"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 20l4 -9"></path>
            <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          </svg>
        </a>
      </div>
      <div>
        <p className="text-gray-400 font-bold font-mono">
          Created by{" "}
          <a href="/" className="hover:text-gray-500">
            Lara
          </a>
        </p>
      </div>
    </footer>
  );
}

export default SidebarFooter;
