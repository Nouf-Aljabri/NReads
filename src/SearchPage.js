import React, { Component } from "react";
import { Link } from "react-router-dom";
import { searchBook } from "./Api";
import BookCard from "./BookCard";

export default class SearchPage extends Component {
  state = {
    showSearchPage: true,
    query: "",
    books: [],
  };

  // handle search result
  changeSearchInput = (e) => {
    // check if query is not empty
    const query = e.target.value;
    if (query.trim()) {
      this.setState({query});
      searchBook(query).then((data) => {
        if (data.error) {
          this.setState({ books: [] });
        } else {
          this.setState({ books: data });
        }
      });
    } else {
      // empty query 
      this.setState({ books: [] });
    }
  };

  render() {
    return (
      <div className="main ">
        <div className="search-container ">
          <div className="search-container-bar ">
            <Link to="/">
              <button
                className="close-btn-bar"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </button>
            </Link>
            <div className="input-wrapper flex overflow-scroll">
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                  this.changeSearchInput(e);
                }}
              />

              <div className="search-results ">
                <ol className="books-box">
                  {this.state.books.length>0 ?this.state.books.map((book) => {
                    // get the shelf for each book
                    const sameBook = this.props.books.find(
                      (searchBook) => searchBook.id === book.id
                    );
                    if (sameBook) {
                      book.shelf = sameBook.shelf;
                      // set the other "none"
                    } else {
                      book.shelf = "none";
                    }

                    return (
                      <BookCard
                        key={book.id}
                        book={book}
                        changeShelf={this.props.changeShelf}
                      />
                    );
                  }): <h1> No results found</h1>}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
