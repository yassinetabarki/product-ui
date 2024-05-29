import React from "react";
import "./SideBarOption.css";

const SideBarOption = ({ active, text, Icon }: any) => {
    return (
        <div className={`side-bar-option ${active && "sideBarOtion--active"}`}>
            <Icon />
            <h2> {text}</h2>
        </div>
    );
}

export default SideBarOption;