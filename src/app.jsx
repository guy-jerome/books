import { useState, useRef } from "preact/hooks";
import "./app.css";
import Book from "./Book";
export function App() {
  const [book, setBook] = useState("");
  const [books, setBooks] = useState([]);
  const bookId = useRef(0);
  function handleAddBook() {
    if (book.trim() !== "") {
      setBooks([...books, { name: book, id: bookId.current }]);
      bookId.current += 1;
      setBook("");
    }
  }
  function handleRemoveBook(id) {
    setBooks(books.filter((book) => book.id !== id));
  }
  return (
    <div>
      <h1>Books I want to read</h1>
      <label htmlFor="book-input">Enter a Book</label>
      <input
        type="text"
        value={book}
        onChange={(e) => {
          setBook(e.target.value);
        }}
      ></input>
      <button onClick={handleAddBook}>+</button>
      <div>
        {books.map((book) => (
          <Book book={book} handleRemoveBook={handleRemoveBook} />
        ))}
      </div>
    </div>
  );
}
