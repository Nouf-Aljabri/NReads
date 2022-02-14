import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import BookList from "./BookList";

export default function HomePage(props){
 const {books , changeShelf} = props;
   
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
              const booksOfEachShelf = books.filter(
                (book) => book.shelf === shelf.state
              );
              return (
                <div className="shelf" key={index}>
                  <h2 className="shelf-title">{shelf.title}</h2>
                  <BookList
                    key={index}
                    books={booksOfEachShelf}
                    changeShelf={changeShelf}
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
