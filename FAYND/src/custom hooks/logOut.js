import Cookies from "js-cookie";

export const handleLogOut = () => {
    Cookies.remove("refresh_token");
  };