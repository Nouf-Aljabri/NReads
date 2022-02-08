import React , {Component  } from "react"
import {getAllBooks } from "./Api"
import "./App.css";

// calculateShelf = (book, books) => {
//     let currentShelf = 'none';

//     for (let item of books ) {
//       if (item.id === book.id)  {
//         currentShelf = item.shelf;
//         break;
//       }
//     }
//     return currentShelf;
//   }

//defaultValue={this.calculateShelf(book, books)}
export default function BookCard (props){
    const {book ,onChangeHandler} = props;
         return (
           <li> 
             <div className="book">
              <div className="book-position">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                    `url(${book.imageLinks.thumbnail})`,
                  }}
                ></div>
                <div className="shelf-shfiter">
                  <select value={book.shelf} onChange={(e)=>{
                     onChangeHandler(e,book);
                  }} >
                    <option value="move" disabled> Move to...
                    </option>
                    <option value="currentlyReading"  > Currently Reading
                    </option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read"  >Read</option>
                    <option value="none" >None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">
               {book.title}
              </div>
              <div className="book-author">  {book.authors[0]}</div>
            </div>
           </li>

          )   
       
    
                }
   

