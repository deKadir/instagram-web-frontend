import { ButtonPrimary } from "components/buttons";
import { Input } from "components/inputs";
import React from "react";
import style from "./change.module.scss";
export default function ChangePassword() {
  return (
    <div className={style.change_password}>
      <form>
        <div className={style.form_item}>
          <label>Current password</label>
          <Input type="password" />
        </div>
        <div className={style.form_item}>
          <label>New password</label>
          <Input type="password" />
        </div>
        <div className={style.form_item}>
          <label>New password</label>
          <Input type="password" />
        </div>
        <div className={style.form_item}>
          <label></label>
          <ButtonPrimary disabled={true}>Change password</ButtonPrimary>
        </div>
      </form>
    </div>
  );
}
