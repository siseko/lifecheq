import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";

const Sidebar: FunctionComponent<{ isOpen: boolean; onClose: () => void }> = (
  props
) => {
  if (!props.isOpen) {
    return null;
  }
  const slot = document.getElementById("sidebar");
  return slot
    ? ReactDOM.createPortal(
        <>
          <div
            className="c-sidebar-overlay"
            onClick={() => props.onClose()}
          ></div>
          <div className="c-sidebar">{props.children}</div>
        </>,
        slot
      )
    : null;
};

export default Sidebar;
