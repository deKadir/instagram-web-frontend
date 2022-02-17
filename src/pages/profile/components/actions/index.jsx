import { SettingsIcon } from "assets/icons";
import { MoreIcon } from "assets/icons";
import { SecondaryButton } from "components/buttons";
import { PrimaryButton } from "components/buttons";
import style from "./actions.module.scss";
export function UserAction() {
  return (
    <div className={style.action}>
      <PrimaryButton>Follow</PrimaryButton>
      <MoreIcon />
    </div>
  );
}
export function EditProfile() {
  return (
    <div className={style.action}>
      <SecondaryButton>Edit Profile</SecondaryButton>
      <SettingsIcon />
    </div>
  );
}
