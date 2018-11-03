import linkedListImage from "../images/linkedlist.png";
import { UPDATE_CONTENT } from "../actions/card";
const initialState = {
  content: {
    title: "Linked List",
    image: linkedListImage,
    text:
      "A linked list is a simple dynamic data structure made up of elements (called nodes) containing some form of data. Each node points to the next node on the list. "
  },
  isLoading: true,
  error: undefined
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONTENT:
      return Object.assign({}, state, {
        content: action.content
      });
  }
  return state;
};

export default cardReducer;
