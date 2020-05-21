import React from 'react';
import Form from './Form';
import Bookshelf from './Bookshelf';

const App = () => {
  return (
    <div className="App grid-container">
      <h1>Winter's Favorite Books</h1>
      <Form />
      <Bookshelf />
    </div>
  );
}

export default App;