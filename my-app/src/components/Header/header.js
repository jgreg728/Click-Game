import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div class="header">
    {props.children}
    </div>
  );
}

export default Header;