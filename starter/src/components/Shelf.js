import Book from "./Book";
import PropTypes from "prop-types";

const Shelf = ({ title, books, changeBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} changeBook={changeBook} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array,
  changeBook: PropTypes.func.isRequired,
};

export default Shelf;
