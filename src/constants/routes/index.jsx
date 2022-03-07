import Home from "pages/home";
import Login from "pages/login";
import Explore from "pages/explore";
import Register from "pages/register";
import Settings from "pages/settings";
import Messages from "pages/messages";
import Profile from "pages/profile";
import Reset from "./../../pages/reset/index";
import ResetPassword from "pages/reset/ResetPassword";
const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    protected: true,
  },
  {
    path: "/explore",
    component: Explore,
    exact: false,
    protected: true,
  },
  {
    path: "/login",
    component: Login,
    exact: false,
    protected: false,
  },
  {
    path: "/register",
    component: Register,
    exact: false,
    protected: false,
  },
  {
    path: "/settings/:content",
    component: Settings,
    exact: false,
    protected: true,
  },
  {
    path: "/messages/:roomId",
    component: Messages,
    exact: false,
    protected: true,
  },
  {
    path: "/profile/:username/:content",
    component: Profile,
    exact: false,
    protected: true,
  },
  {
    path: "/reset",
    component: Reset,
    exact: false,
    protected: false,
  },
  {
    path: "/reset-password/:token",
    component: ResetPassword,
    exact: false,
    protected: false,
  },
];
export default routes;
