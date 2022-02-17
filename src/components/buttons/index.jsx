import style from "./button.module.scss";
export const Button = ({ children, style: _style, disabled = false }) => {
  return (
    <button style={_style} className={style.button} disabled={disabled}>
      {children}
    </button>
  );
};
export const PrimaryButton = ({
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
export const SecondaryButton = ({
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
