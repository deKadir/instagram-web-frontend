import { FileInput, Input } from "components/inputs";
import React, { useEffect, useState } from "react";
import style from "./edit.module.scss";
import { Button } from "components/buttons";
import { ButtonPrimary } from "components/buttons";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "requests/UserRequest";
import { saveUserInfo } from "redux/actions/userAction";
import { getImage } from "helpers/image";
import { updateProfielImg } from "requests/UserRequest";
const responseInitial = { error: false, message: "" };
let formInitial = {
  name: "",
  username: "",
  bio: "",
  email: "",
};
export default function Edit() {
  const userInfo = useSelector((state) => state.user);
  const [response, setResponse] = useState(responseInitial);
  let dispatch = useDispatch();
  const [userForm, setUserForm] = useState(formInitial);
  const [profileImg, setProfileImg] = useState();
  const formData = new FormData();
  const token = useSelector((state) => state.auth.token);
  const handleFormChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setUserForm({
      name: userInfo?.name,
      username: userInfo?.username,
      bio: userInfo?.bio,
      email: userInfo?.email,
      profileImg: userInfo?.profileImg,
    });
  }, [userInfo]);
  const handleFormSubmit = (e) => {
    setResponse(responseInitial);
    e.preventDefault();
    const fields = [];

    for (var field in userForm) {
      if (userForm[field] === "" && field !== "bio") {
        fields.push(field);
      }
    }

    if (fields.length) {
      setResponse({ error: true, message: `${fields} cannot be empty` });
    } else {
      if (formData.get("profileImg")) {
        updateProfielImg(token, formData)
          .then((res) => {
            dispatch(
              saveUserInfo({ ...userForm, profileImg: res.data.profileImg })
            );
            console.log("calisti");
          })
          .catch((e) => console.log(e.response));
      }

      updateUserInfo(token, userForm)
        .then((res) => {
          if (res.data.data) {
            dispatch(saveUserInfo({ ...userForm, ...res.data.data }));
            setResponse({ error: false, message: "uploaded successfully." });
          } else {
            setResponse({ error: true, message: "an error occured" });
          }
        })
        .catch((error) => {
          setResponse(responseInitial);
          if (error.response.data.message.includes("username")) {
            setResponse({
              error: true,
              message: "this username already taken",
            });
          } else if (error.response.data.message.includes("email")) {
            setResponse({ error: true, message: "this email already in use" });
          } else {
            setResponse({ error: true, message: error.response });
          }
        });
    }
  };

  return (
    <div>
      <form>
        <div className={style.form_item}>
          <label>
            <img src={getImage(userInfo?.profileImg)} alt="profile" />
          </label>
          <div>
            <Button>
              Change your profile photo{" "}
              <FileInput
                onChange={(e) => {
                  formData.append("profileImg", e.target.files[0]);
                }}
              />
            </Button>
          </div>
        </div>
        <div className={style.form_item}>
          <label>Name</label>
          <div>
            <Input
              placeholder="Name"
              name="name"
              value={userForm.name}
              onChange={handleFormChange}
            />
            <span>You can change your name twince in two weeks</span>
          </div>
        </div>
        <div className={style.form_item}>
          <label>Username</label>
          <div>
            <Input
              placeholder="username"
              name="username"
              value={userForm.username}
              onChange={handleFormChange}
            />
          </div>
        </div>
        <div className={style.form_item}>
          <label>Bio</label>
          <div>
            <textarea
              value={userForm.bio}
              name="bio"
              onChange={handleFormChange}
            ></textarea>
          </div>
        </div>

        <div className={style.form_item}>
          <label>E-mail</label>
          <div>
            <Input
              placeholder="email"
              name="email"
              value={userForm.email}
              onChange={handleFormChange}
            />
          </div>
        </div>
        <div className={style.form_item}>
          <label></label>
          <div>
            <label
              style={{
                width: "100%",
                marginBottom: "1rem",
                color: response.error ? "red" : "green",
              }}
            >
              {response.message}
            </label>
            <ButtonPrimary onClick={handleFormSubmit}>Submit</ButtonPrimary>
          </div>
        </div>
      </form>
    </div>
  );
}
