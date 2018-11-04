import linkedListImage from "../images/linkedlist.png";
import linkedListImage2 from "../images/linked_list2.jpg";
import linkedListImage3 from "../images/linkedlist3.svg.png";
import { UPDATE_CONTENT } from "../actions/card";

const initialState = {
  content: [
    {
      title: "Linked List",
      image: linkedListImage,
      text:
        "A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers."
    },
    {
      title: "Linked List",
      image: linkedListImage2,
      text:
        "Linked List is a sequence of links which contains items. Each link contains a connection to another link. Linked list is the second most-used data structure after array."
    },
    {
      title: "Linked List",
      image: linkedListImage3,
      text:
        "In computer science, a linked list is a linear collection of data elements, whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence."
    }
  ],
  index: 0,
  isLoading: true,
  error: undefined
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONTENT:
      if (state.index >= state.content.length - 1) {
        return Object.assign({}, state, {
          index: 0
        });
      }
      return Object.assign({}, state, {
        index: state.index + 1
      });
    default:
      return state;
  }
};

export default cardReducer;
