import React, { useState } from "react";
import Image from "next/image";

import logo from "../../../public/images/logo.png";
import Navbar from "../Navbar/Navbar";
import SidebarOpenButton from "../Navbar/SidebarOpenButton";
import SidebarCloseButton from "../Navbar/SidebarCloseButton";
import SidebarFooter from "./SidebarFooter";

type Props = {};

function Sidebar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <SidebarCloseButton onClick={toggleSidebar} />
      ) : (
        <SidebarOpenButton onClick={toggleSidebar} />
      )}

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? "" : "-translate-x-full"
        }  sm:translate-x-0 bg-white sm:bg-gray-200`}
        aria-label="Sidebar"
      >
        <div className="relative h-full overflow-y-auto bg-white rounded-r-3xl shadow-xl overflow-auto no-scrollbar">
          <div className="border-b-2 sticky top-0 bg-white shadow-xl p-2">
            <Image src={logo} alt="logo" width={360} />
          </div>
          <Navbar />
        </div>
        <SidebarFooter />
      </aside>

      {isOpen ? (
        <div
          onClick={toggleSidebar}
          className="w-full h-full bg-black opacity-50 absolute top-0 z-10"
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Sidebar;
