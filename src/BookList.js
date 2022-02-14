import React, { Component } from "react";
import BookCard from "./BookCard";

export default function BookList(props) {
  const { books, changeShelf } = props;

  return (
    <div className="shelf-books">
      <ol className="books-box">
        {
        // display the books for each shelf
        books.map((book) => {
          return (
            <BookCard
              key={book.id}
              book={book}
              changeShelf={changeShelf}
            />
          );
        })}
      </ol>
    </div>
  );
}
