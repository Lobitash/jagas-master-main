import React from "react";
/*
 * Custom fonts
 * Uncomment below if using custom fonts
 */
import "./static/fonts/fonts.css";

export function wrapPageElement({ element, props }) {
  return <div {...props}>{element}</div>;
}
