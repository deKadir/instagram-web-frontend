import ChangePassword from "../contents/changepassword";
import style from "./content.module.scss";
import { useParams } from "react-router-dom";
import Edit from "../contents/edit";
import Security from "../contents/security";
export default function SettingsContent() {
  let activePath = useParams().content;
  return (
    <div className={style.content}>
      {activePath === "edit" && <Edit />}
      {activePath === "change-password" && <ChangePassword />}
      {activePath === "security" && <Security />}
    </div>
  );
}
