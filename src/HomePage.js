import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAllBooks, updateBook } from "./Api";
import "./App.css";
import BookList from "./BookList";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
    //this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidMount() {
    {
      getAllBooks().then((data) => {
        this.setState({ books: data });
      });
    }
  }

  // update shelf
  onChangeHandler = (e, id) => {
    updateBook(id, e.target.value);
    getAllBooks().then((updatedBooks) => {
      this.setState({ books: updatedBooks });
    });
  };

  render() {
    const bookshelves = [
      { state: "currentlyReading", title: "Currently Reading" },
      { state: "wantToRead", title: "Want to Read" },
      { state: "read", title: "Read" },
    ];
    return (
      <div>
        <div className="books-list">
          <div className="books-list_title">
            <h1>NReads</h1>
          </div>
          <div className="books-list_content">
            { 
            // display the list of shelves 
            bookshelves.map((shelf, index) => {
              const booksOfEachShelf = this.state.books.filter(
                (book) => book.shelf === shelf.state
              );
              return (
                <div className="shelf" key={index}>
                  <h2 className="shelf-title">{shelf.title}</h2>
                  <BookList
                    key={index}
                    books={booksOfEachShelf}
                    onChangeHandler={this.onChangeHandler}
                  />
                </div>
              );
            })}
          </div>
          <div className="search-btn">
            <Link to="/SearchPage">
              <button>Add a book</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
