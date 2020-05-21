//take in title and author information to "add" a book to the shelf.
import React from 'react'
// import { connect } from 'redux';
import { addBook } from './../actions';
import { connect } from 'react-redux';

class Form extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBook({
      title: e.target.title.value,
      author: e.target.author.value });
  }

  render() {
  return (
    <div className="Form">
      <h3>Submit a book to add it to your book shelf</h3>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="author">Author:
          <input type="text"
          name="author"
          id="author"
          placeholder="author" />
        </label>
        <label htmlFor="title">Title:
          <input type="text"
            name="title"
            id="title"
            placeholder="title" />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}
}

// const mapStateToProps = state => {
//   return {

//   }
// }

export default connect(null, { addBook } )(Form);