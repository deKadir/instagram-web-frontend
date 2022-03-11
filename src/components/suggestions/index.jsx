import React, { useEffect, useState } from "react";
import Follow from "components/follow";
import style from "./suggestion.module.scss";
import { searchUser } from "requests/UserRequest";
import { useSelector } from "react-redux";
export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const token = useSelector((state) => state.auth.token);
  const activeUser = useSelector((state) => state.user);
  useEffect(() => {
    searchUser(token, "").then((res) => {
      setSuggestions(res.data.users);
    });
  }, [token]);
  return (
    <div className={style.suggestions}>
      <div>
        <p>Suggestions for you</p>
        <button>see all</button>
      </div>
      {suggestions
        .filter((user) => user.username !== activeUser?.username)
        .map((user, index) => {
          return <Follow userInfo={user} key={index} />;
        })}
    </div>
  );
}
