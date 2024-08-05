import React from "react";
import Sidebar from "./Sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

function Layout(props: Props) {
  return (
    <>
      <Sidebar />
      {props.children}
    </>
  );
}

export default Layout;
