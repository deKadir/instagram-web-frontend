import style from "./button.module.scss";
export const Button = ({ children, style: _style }) => {
  return (
    <button style={_style} className={style.button}>
      {children}
    </button>
  );
};
