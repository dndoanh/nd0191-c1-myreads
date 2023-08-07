import { useEffect } from "react/cjs/react.production.min";
import "./App.css";
import { useState } from "react";
import { getAll, update } from "./BooksAPI";
import BooksPage from "./pages/BooksPage";

function App() {
  const [books, setBooks] = useState([]);

  // initially loading books
  useEffect(() => {
    getAll().then((data) => setBooks(data));
  }, []);

  // change shelf of a book
  const changeBook = (book, shelf) => {
    update(book, shelf).then(() => {
      // do update shelf for selected book
      book.shelf = shelf;
      // do update state of books
      setBooks(books.filter((x) => x.id !== book.id).concat(book));
    });
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<BooksPage books={books} changeBook={changeBook} />}
        />
        <Route
          path="/search"
          element={<SearchPage booksOnShelf={books} moveBook={moveBook} />}
        />
      </Routes>
    </div>
  );
}

export default App;
