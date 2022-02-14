import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getAllBooks, updateBook } from "./Api";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myBooks: [],
    };
  }

  componentDidMount() {
    getAllBooks().then((data) => {
      this.setState({ myBooks: data });
    });
  }
  changeShelf = (newShelf, book) => {
    updateBook(book.id, newShelf);
    book.shelf = newShelf;
    // take all previous books
    const updatedBooks = this.state.myBooks.filter((prevBook) => prevBook.id !== book.id);
    // add the updated book
    updatedBooks.push(book);
    this.setState({ myBooks: updatedBooks });
  };

  render() {
    return (
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HomePage
                books={this.state.myBooks}
                changeShelf={this.changeShelf}
              />
            }
          />
          <Route
            path="/SearchPage"
            element={
              <SearchPage
                books={this.state.myBooks}
                changeShelf={this.changeShelf}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
