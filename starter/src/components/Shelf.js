import Book from "./Book";


const Shelf = (title, books, changeBook) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li>
              <Book book={book} changeBook={changeBook} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
