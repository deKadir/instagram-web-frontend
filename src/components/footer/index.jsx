import { Button } from "components/buttons";
import style from "./footer.module.scss";
const footerItems = [
  "About",
  "Press",
  "API",
  "Jobs",
  "Privacy",
  "Terms",
  "Locations",
  "Top Accounts",
  "Hashtags",
  "Language",
];
export default function Footer() {
  return (
    <div className={style.footer}>
      {footerItems.map((item, key) => (
        <Button key={key}>{item}</Button>
      ))}
    </div>
  );
}
