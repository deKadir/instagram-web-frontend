import { SearchIcon } from "assets/icons";
import { ButtonText } from "components/buttons";
import { SearchItem } from "components/menu/search";
import React, { useState } from "react";
import style from "./input.module.scss";

export const Input = ({ placeholder = "", type = "text" }) => {
  return (
    <input type={type} placeholder={placeholder} className={style.input} />
  );
};
export const SearchInput = ({ placeholder = "Search", data = [] }) => {
  const [inputItem, setInputItem] = useState({ value: "", focus: false });
  return (
    <div className={style.search}>
      {inputItem.focus && (
        <button
          className={style.background_button}
          onClick={() => {
            setInputItem({ ...inputItem, focus: false });
          }}
        ></button>
      )}
      {!inputItem.value && (
        <span className={style.search_icon}>
          <SearchIcon />
        </span>
      )}
      <input
        placeholder={placeholder}
        value={inputItem.value}
        className={style.search_input}
        onClick={() => {
          setInputItem({ ...inputItem, focus: true });
        }}
        onChange={(e) => setInputItem({ ...inputItem, value: e.target.value })}
      />
      {inputItem.focus && (
        <div className={style.search_menu}>
          <div className={style.search_menu_head}>
            <h2>Recent</h2>
            <ButtonText>Clear all</ButtonText>
          </div>
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </div>
      )}
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
