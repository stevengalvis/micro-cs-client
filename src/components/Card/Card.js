import React from "react";
import { connect } from "react-redux";
import { updateContent } from "../../actions/card";
import Content from "../Content/Content";

export class Card extends React.Component {
  onMoreBtnClick() {
    this.props.dispatch(updateContent());
  }
  render() {
    return (
      <div className="card">
        <Content {...this.props} />
        <button className="more-btn" onClick={() => this.onMoreBtnClick()}>
          More
        </button>
        <button>Next</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  let index = state.card.index;
  return {
    title: state.card.content[index].title,
    image: state.card.content[index].image,
    text: state.card.content[index].text
  };
};

export default connect(mapStateToProps)(Card);
