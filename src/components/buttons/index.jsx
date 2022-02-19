import style from "./button.module.scss";
export const Button = ({ children, style: _style, disabled = false }) => {
  return (
    <button style={_style} className={style.button} disabled={disabled}>
      {children}
    </button>
  );
};
export const ButtonPrimary = ({
  children,
  style: _style,
  disabled = false,
}) => {
  return (
    <button style={_style} disabled={disabled} className={style.button_primary}>
      {children}
    </button>
  );
};
export const ButtonSecondary = ({
  children,
  style: _style,
  disabled = false,
}) => {
  return (
    <button
      style={_style}
      disabled={disabled}
      className={style.button_secondary}
    >
      {children}
    </button>
  );
};
export const ButtonText = ({ children, style: _style, disabled = false }) => {
  return (
    <button style={_style} disabled={disabled} className={style.button_text}>
      {children}
    </button>
  );
};
