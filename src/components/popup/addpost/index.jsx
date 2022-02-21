import style from "./add.module.scss";
import Upload from "./Upload";
export default function AddPost() {
  return (
    <div className={style.add_post}>
      <Upload />
    </div>
  );
}
