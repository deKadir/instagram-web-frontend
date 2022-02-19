import { Input } from "components/inputs";
import React from "react";
import profile from "assets/images/profile_img.jpg";
import style from "./edit.module.scss";
import { FileInput } from "components/inputs";
import { Button } from "components/buttons";
import { ButtonPrimary } from "components/buttons";
export default function Edit() {
  return (
    <div>
      <form>
        <div className={style.form_item}>
          <label>
            <img src={profile} />
          </label>
          <div>
            <Button>Change your profile photo</Button>
          </div>
        </div>
        <div className={style.form_item}>
          <label>Name</label>
          <div>
            <Input placeholder="Name" />
            <span>You can change your name twince in two weeks</span>
          </div>
        </div>
        <div className={style.form_item}>
          <label>Username</label>
          <div>
            <Input placeholder="username" />
          </div>
        </div>
        <div className={style.form_item}>
          <label>Bio</label>
          <div>
            <textarea></textarea>
          </div>
        </div>

        <div className={style.form_item}>
          <label>E-mail</label>
          <div>
            <Input placeholder="email" />
          </div>
        </div>
        <div className={style.form_item}>
          <label></label>
          <div>
            <ButtonPrimary>Submit</ButtonPrimary>
          </div>
        </div>
      </form>
    </div>
  );
}
