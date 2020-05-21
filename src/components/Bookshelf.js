//display the list of books in a formatted way. use flexbox set to columns, probably
import React from 'react';
import { connect } from 'react-redux';
// import { bookListReducer } from './..reducers';

function Bookshelf(props) {
  if (!props.books) {
    return (
      <h3>There are no books to display</h3>
    );
  }

  return (
    <div className="Bookshelf flex-container">
      {props.books.map(book => 
        <div className="book">
          Title: {book.title}
          Author: {book.author}
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    books: state.bookListReducer
  }
}

export default connect(mapStateToProps)(Bookshelf);