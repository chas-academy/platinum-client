import React from "react";
import Alert from "../../Components/Alert";

export function setFocus(UISchema, input) {
  if (input) {
    document.getElementById(`${UISchema["ui:rootFieldId"]}_${input}`).focus();
  }
}

/* eslint-disable no-unused-vars */

export function errorList(props) {
  return <Alert formError />;
}

/* eslint-enable no-unused-vars */
