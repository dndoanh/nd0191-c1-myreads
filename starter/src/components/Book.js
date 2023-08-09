import PropTypes from "prop-types";

const Book = ({ book, changeBook }) => {
  const shelves = [
    {
      id: "1",
      shelfName: "currentReading",
      shelfDisplayName: "Currently Reading",
    },
    {
      id: "2",
      shelfName: "wantToRead",
      shelfDisplayName: "Want to Read",
    },
    {
      id: "3",
      shelfName: "read",
      shelfDisplayName: "Read",
    },
    {
      id: "4",
      shelfName: "none",
      shelfDisplayName: "None",
    },
  ];
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: book.imageLinks
              ? `url("${book.imageLinks.smallThumbnail}")`
              : "",
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            value={book.shelf ? book.shelf : "none"}
            onChange={(e) => changeBook(book, e.target.value)}
          >
            <option value="xxx" disabled>
              Move to...
            </option>
            {shelves.map((item) => (
              <option key={item.id} value={item.shelfName}>
                {item.shelfDisplayName}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors && book.authors.join()}</div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  changeBook: PropTypes.func.isRequired,
};

export default Book;
