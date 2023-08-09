import Book from "../components/Book";
import { search } from "../BooksAPI";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import debounce from "lodash.debounce";

const SearchPage = ({ currentBooks, changeBook }) => {
  const [textInput, setTextInput] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  // call search book API
  function searchBook() {
    // check input text, do search only non-empty input text
    if (textInput === "") {
      setSearchBooks([]);
      return;
    }
    // use debounce to ensure search api only calling after 300 miliseconds
    const debouncedSearch = debounce(() => {
      // do search by api call
      search(textInput).then((data) => {
        console.log(data);
        // check response data type
        if (!(data instanceof Array)) {
          setSearchBooks([]);
          return;
        }
        // check current books on shelf, if existing then update shelf accordingly
        let newBooks = data.map((item) => {
          const existingBook = currentBooks.find(
            (currBook) => currBook.id === item.id
          );
          item.shelf = existingBook ? existingBook.shelf : "none";
          return item;
        });
        setSearchBooks(newBooks);
      });
    }, 300);
    debouncedSearch();
  }

  // useEffect to trigger search book function when on change textInput
  useEffect(() => {
    searchBook();
  }, [textInput]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to={"/"}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => setTextInput(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooks.map((book) => (
            <li key={book.id}>
              <Book book={book} changeBook={changeBook} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
