import Loading from "components/loading/Loading";
import style from "./button.module.scss";
export const Button = ({
  children,
  style: _style,
  disabled = false,
  onClick = () => {},
}) => {
  return (
    <button
      style={_style}
      className={style.button}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export const ButtonPrimary = ({
  children,
  style: _style,
  disabled = false,
  onClick = () => {},
  loading = false,
}) => {
  return (
    <button
      style={_style}
      disabled={disabled}
      className={style.button_primary}
      onClick={onClick}
      loading={false}
    >
      {loading ? <Loading size="18" /> : children}
    </button>
  );
};
export const ButtonSecondary = ({
  children,
  style: _style,
  disabled = false,
  onClick = () => {},
}) => {
  return (
    <button
      style={_style}
      disabled={disabled}
      className={style.button_secondary}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export const ButtonText = ({
  children,
  style: _style,
  disabled = false,
  onClick = () => {},
}) => {
  return (
    <button
      style={_style}
      disabled={disabled}
      className={style.button_text}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
