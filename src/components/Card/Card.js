import React from "react";
import Visual from "../Visual/Visual";
import Content from "../Content/Content";

export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <h1>{this.props.header}</h1>
        <Visual />
        <Content />
      </div>
    );
  }
}

Card.defaultProps = {
  header: ""
};
