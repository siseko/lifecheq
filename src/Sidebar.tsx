import React, { FunctionComponent } from "react";

const Sidebar: FunctionComponent = (props) => {
  return <div className="c-sidebar">{props.children}</div>;
};

export default Sidebar;
