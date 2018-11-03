import React from "react";

export default function Content(props) {
  return (
    <div className="content">
      <h1>{props.title}</h1>
      <img src={props.image} alt={"Linked List example"} />
      <p>{props.text}</p>
    </div>
  );
}
