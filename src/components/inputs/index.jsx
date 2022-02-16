import { SearchIcon } from "assets/icons";
import React from "react";
import style from "./input.module.scss";

export const Input = ({ placeHolder = "" }) => {
  return <input placeholder={placeHolder} className={style.input} />;
};
export const SearchInput = ({ placeholder = "Search" }) => {
  return (
    <div className={style.search}>
      <SearchIcon />
      <input placeholder={placeholder} className={style.search_input} />
    </div>
  );
};
