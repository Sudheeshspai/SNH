import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { LiaWindowMinimizeSolid } from "react-icons/lia";
import { CgMaximizeAlt } from "react-icons/cg";
import { Editor } from "novel";

function Terminal() {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const toggleClose = () => {
    setIsClosed(!isClosed);
  };

  const terminalClassName = `terminal ${isMaximized ? "term-max" : ""} ${
    isClosed ? "term-close" : ""
  }`;

  return (
    <div className={terminalClassName}>
      <div className="terminal-top">
        <span>Terminal</span>
        <div className="terminal-btns">
          <IoIosCloseCircle color="red" onClick={toggleClose} />
          <LiaWindowMinimizeSolid color="yellow" />
          <CgMaximizeAlt color="green" onClick={toggleMaximize} />
        </div>
      </div>
      <Editor
        className="editor"
        completionApi="http://localhost:5000/api/generate/"
      />
    </div>
  );
}

export default Terminal;
