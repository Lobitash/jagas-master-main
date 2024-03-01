import React from "react";

export function wrapPageElement({ element, props }) {
  return <div {...props}>{element}</div>;
}
