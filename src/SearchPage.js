import React from "react";
import { Link } from "react-router-dom";

export default function SearchPage(props) {
  const {books} = props;
  return (
    <div className="main">
      <div className="search-container">
        <div className="search-container-bar">
        <Link to="/">
        <button
            className="close-btn-bar"
            onClick={() => this.setState({ showSearchPage: false })}
          >
            Close
          </button>
            </Link>
          <div className="input-wrapper">
            <input type="text" placeholder="Search..." />
          </div>
        </div>

      </div>
    </div>
  );
}

const SearchResult = props =>{
  const {books} = props;
  return (
    <div className="search-results">
    <ol className="books-box"></ol>
    </div>
  )


}

