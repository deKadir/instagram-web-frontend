import style from "./add.module.scss";
import Upload from "./Upload";
import UploadDetail from "./UploadDetail";
import { useState } from "react";
import { sharePost } from "requests/PostRequest";
import { useSelector } from "react-redux";

const postFormInitial = {
  photos: [],
  description: "",
};
const responseInitial = {
  error: false,
  message: "",
  waiting: false,
};
export default function AddPost() {
  const formData = new FormData();
  let token = useSelector((state) => state.auth.token);
  const [postForm, setPostForm] = useState(postFormInitial);
  const [response, setResponse] = useState(responseInitial);
  let userInfo = useSelector((state) => state.user);
  const handleFormSubmit = () => {
    formData.append("description", postForm.description);
    for (let index in postForm.photos) {
      if (!postForm.photos[index].type.includes("image")) {
        setResponse({ error: true, message: "this file type isnt supported" });
        return 0;
      }
    }
    postForm.photos.map((photo) => formData.append("photo", photo));
    setResponse({ ...responseInitial, waiting: true });
    sharePost(token, formData)
      .then((res) => {
        setResponse({
          error: res.data.error,
          message: res.data.message,
          waiting: true,
        });
        setTimeout(() => window.location.reload(), 300);
      })
      .catch((e) =>
        setResponse({
          error: true,
          message: e.response.data.message,
          waiting: false,
        })
      );
  };

  return (
    <div className={style.add_post}>
      {!postForm.photos.length ? (
        <Upload
          formData={formData}
          setPostForm={setPostForm}
          postForm={postForm}
        />
      ) : (
        <>
          <UploadDetail
            handleFormSubmit={handleFormSubmit}
            postForm={postForm}
            setPostForm={setPostForm}
            response={response}
            userInfo={userInfo}
          />
        </>
      )}
    </div>
  );
}
