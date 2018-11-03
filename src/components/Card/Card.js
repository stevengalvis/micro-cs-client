import React from "react";
import { connect } from "react-redux";
import { updateContent } from "../../actions/card";
import Visual from "../Visual/Visual";
import Content from "../Content/Content";

export class Card extends React.Component {
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

const mapStateToProps = (state, props) => {
  return {
    title: state.card.content.title,
    image: state.card.content.image,
    text: state.card.content.text
  };
};

export default connect(mapStateToProps)(Card);
