import React from "react";

export default function Content(props) {
  return <div className="content">{props.text}</div>;
}

Content.defaultProps = {
  text: "Here is some sample text"
};
