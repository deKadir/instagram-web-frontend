import Home from "pages/home";
import Login from "pages/login";
import Explore from "pages/explore";
import Register from "pages/register";
import Settings from "pages/settings";
import Messages from "pages/messages";
import Profile from "pages/profile";
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
    path: "/settings",
    component: Settings,
    exact: false,
    protected: true,
  },
  {
    path: "/messages",
    component: Messages,
    exact: false,
    protected: true,
  },
  {
    path: "/profile/:content",
    component: Profile,
    exact: false,
    protected: true,
  },
];
export default routes;
