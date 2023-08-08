import { Link } from "react-router-dom";
import Shelf from "../components/Shelf";

const BooksPage = ({ books, changeBook }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Shelf
            title={"Currently Reading"}
            books={books.filter((x) => x.shelf === "currentlyReading")}
            changeBook={changeBook}
          ></Shelf>
          <Shelf
            title={"Want to Read"}
            books={books.filter((x) => x.shelf === "wantToRead")}
            changeBook={changeBook}
          ></Shelf>
          <Shelf
            title={"Read"}
            books={books.filter((x) => x.shelf === "read")}
            changeBook={changeBook}
          ></Shelf>
        </div>
      </div>
      <div className="open-search">
        <Link to={"search"}></Link>
      </div>
    </div>
  );
};

export default BooksPage;
