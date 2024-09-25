import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { logout } from "./features/userSlice";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Header() {
  const dispatch = useDispatch();
  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://scontent.fstv8-1.fna.fbcdn.net/v/t39.30808-6/278828209_7616568535052047_7480144482523053178_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=_nMCRmhaglcAX_W9NEb&_nc_ht=scontent.fstv8-1.fna&oh=00_AT9Ni4QGSjStfM71EHT8TtNEEMihA8IUL50plDi8CcLbJw&oe=626BE90D"
          alt="Logo"
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          Icon={ExitToAppIcon}
          title="Logout"
          onClick={logOutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
