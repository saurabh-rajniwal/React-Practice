import React, { useState } from "react";
import "../tooltip/Tooltip.css";

function Tooltip() {
  const [visibility, setVisibility] = useState(false);

  const showText = () => {
    setVisibility(true);
  };

  const hideText = () => {
    setVisibility(false);
  };
  return (
    <div onMouseEnter={showText} onMouseLeave={hideText}>
      <span>Hover me</span>
      {visibility && (
        <div className="tootlipContainer">
          <p>This is the tooltip text</p>
        </div>
      )}
    </div>
  );
}

export default Tooltip;
