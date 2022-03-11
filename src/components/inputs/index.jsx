import { SearchIcon } from "assets/icons";
import { SearchItem } from "components/menu/search";
import React, { useState } from "react";
import style from "./input.module.scss";

export const Input = ({
  placeholder = "",
  type = "text",
  multiple = false,
  value = "",
  name = "",
  onChange: _onChange = () => {},
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={_onChange}
      value={value}
      name={name}
      className={style.input}
      multiple={multiple}
    />
  );
};
export const SearchInput = ({
  placeholder = "Search",
  data = [],
  setSearchKey = () => {},
  searchKey = "",
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={style.search}>
      {focus && (
        <button
          className={style.background_button}
          onClick={() => {
            setFocus(false);
          }}
        ></button>
      )}
      {!searchKey && (
        <span className={style.search_icon}>
          <SearchIcon />
        </span>
      )}
      <input
        placeholder={placeholder}
        value={searchKey}
        className={style.search_input}
        onClick={() => {
          setFocus(true);
        }}
        onChange={(e) => setSearchKey(e.target.value)}
      />
      {focus && (
        <div className={style.search_menu}>
          <div className={style.search_menu_head}>
            <h2>Result</h2>
          </div>
          {data.map((user, index) => {
            return <SearchItem key={index} user={user} />;
          })}
        </div>
      )}
    </div>
  );
};
export const FileInput = ({
  placeholder = "",
  multiple = false,
  value = "",
  name = "",
  onChange: _onChange = () => {},
}) => {
  return (
    <input
      type="file"
      placeholder={placeholder}
      className={style.file_input}
      multiple={multiple}
      value={value}
      onChange={_onChange}
      name={name}
    />
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
