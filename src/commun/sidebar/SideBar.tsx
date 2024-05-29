import React from "react";
import SideBarOption from "./SideBarOption";
import AirIcon from '@mui/icons-material/Air';
const SideBar: React.FC<{}> = () => {
    return (
        <>
            <SideBarOption active Icon={AirIcon} text="Home" />
            <SideBarOption Icon={AirIcon} text="Reading List" />
            <SideBarOption Icon={AirIcon} text="PodCasts" />
            <SideBarOption Icon={AirIcon} text="Videos" />
            <SideBarOption Icon={AirIcon} text="Tags" />
            <SideBarOption Icon={AirIcon} text="FAQ" />
            <SideBarOption Icon={AirIcon} text="Forem Shop" />
            <SideBarOption Icon={AirIcon} text="Advertise on DEV" />
        </>
    )
}
export default SideBar;