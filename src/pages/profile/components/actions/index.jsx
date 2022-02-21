import { SettingsIcon } from "assets/icons";
import { MoreIcon } from "assets/icons";
import { ButtonPrimary, ButtonSecondary } from "components/buttons";
import style from "./actions.module.scss";
import { Link } from "react-router-dom";
export function UserAction() {
  return (
    <div className={style.action}>
      <ButtonPrimary>Follow</ButtonPrimary>
      <MoreIcon />
    </div>
  );
}
export function EditProfile() {
  return (
    <div className={style.action}>
      <Link to={"/settings/edit"}>
        <ButtonSecondary>Edit Profile</ButtonSecondary>
      </Link>
      <Link to={"/settings/edit"}>
        <SettingsIcon />
      </Link>
    </div>
  );
}
