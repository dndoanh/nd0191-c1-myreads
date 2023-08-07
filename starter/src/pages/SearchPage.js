import { useEffect, useState } from "react/cjs/react.production.min";
import Book from "../components/Book";
import { search } from "../BooksAPI";

const SearchPage = ({ currentBooks, changeBook }) => {
  const [textInput, setTextInput] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  // useEffect to trigger search book function when on change textInput
  useEffect(() => {
    searchBook();
  }, [textInput]);

  // call search book API
  function searchBook() {
    if (length(textInput) < 3) {
      setSearchBooks([]);
      return;
    }
    search(textInput).then((data) => {
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
  }

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
