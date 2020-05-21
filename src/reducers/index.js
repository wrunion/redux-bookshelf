// import { ADD_BOOK } from './../actions';

export default (state=[{author: "JK Rowling", title: "Harry Potter"}], action) => {
  const { type, data } = action;

  switch(type) {
    case 'ADD_BOOK':
      return [...state, data];
    default:
      return state;
  }
}