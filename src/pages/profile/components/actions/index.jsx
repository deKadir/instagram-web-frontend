import { SettingsIcon } from "assets/icons";
import { MoreIcon } from "assets/icons";
import { ButtonPrimary, ButtonSecondary } from "components/buttons";
import style from "./actions.module.scss";
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
      <ButtonSecondary>Edit Profile</ButtonSecondary>
      <SettingsIcon />
    </div>
  );
}
