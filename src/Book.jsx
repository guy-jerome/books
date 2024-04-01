import { useState } from "preact/hooks";

export default function Book({ book, handleRemoveBook }) {
  const [read, setRead] = useState(false);
  return (
    <div key={book.id}>
      <h3>{book.name}</h3>
      <button
        onClick={() => {
          handleRemoveBook(book.id);
        }}
      >
        Remove
      </button>
      <input
        type="checkbox"
        checked={read}
        onChange={() => {
          setRead(!read);
        }}
      />
      <h3>{read ? "Read" : "Not Read"}</h3>
    </div>
  );
}
