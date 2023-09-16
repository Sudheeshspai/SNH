import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { LiaWindowMinimizeSolid } from "react-icons/lia";
import { CgMaximizeAlt } from "react-icons/cg";
import { Editor } from "novel";
function Terminal() {
  return (
    <div className="terminal">
      <div className="terminal-top">
        <span>Terminal</span>
        <div className="terminal-btns">
          <IoIosCloseCircle color="red" />
          <LiaWindowMinimizeSolid color="yellow" />
          <CgMaximizeAlt color="green" />
        </div>
      </div>
      <Editor className="editor" />
    </div>
  );
}
export default Terminal;
