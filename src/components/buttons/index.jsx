import style from "./button.module.scss";
export const Button = ({ children, style: _style, disabled = false }) => {
  return (
    <button style={_style} className={style.button} disabled={disabled}>
      {children}
    </button>
  );
};
