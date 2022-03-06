import React from "react";
import { Input } from "components/inputs";
export default function NewPassword() {
  return (
    <div>
      {" "}
      <Input placeholder="new password" />
      <Input placeholder="verify password" />
    </div>
  );
}
