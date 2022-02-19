import { SearchIcon } from "assets/icons";
import React from "react";
import style from "./input.module.scss";

export const Input = ({ placeholder = "", type = "text" }) => {
  return (
    <input type={type} placeholder={placeholder} className={style.input} />
  );
};
export const SearchInput = ({ placeholder = "Search" }) => {
  return (
    <div className={style.search}>
      <SearchIcon />
      <input placeholder={placeholder} className={style.search_input} />
    </div>
  );
};
export const FileInput = ({ placeholder = "" }) => {
  return (
    <input type="file" placeholder={placeholder} className={style.file_input} />
  );
};
export const Checkbox = ({ title }) => {
  return (
    <div className={style.checkbox}>
      <input type="checkbox" />
      <label>{title}</label>
    </div>
  );
};
