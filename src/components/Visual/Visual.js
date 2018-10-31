import React from "react";

export default function Visual(props) {
  return <div className="visual">{props.image}</div>;
}

Visual.defaultProps = {
  image: ""
};
