import React from "react";
import {menus} from "./Data";

export default function TreeView() {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}
