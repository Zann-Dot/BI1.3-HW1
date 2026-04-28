import useFetch from "../useFetch";
import BookTitle from "./BookTitle";
import BookAuthor from "./BookAuthor";
import { Link } from "react-router";

export default function Books() {
  const { data, loading, error } = useFetch("http://localhost:3000/books");

  return (
    <div>
      <h2>All Books</h2>
      <ul className="list-group">
        {loading && <p>Loading...</p>}
        {error && <p>Error Occured</p>}
        {data?.map((b) => (
          <li
            key={b._id}
            className="list-group-item bg-dark text-light border-secondary"
          >
            {b.title}
          </li>
        ))}
      </ul>
      <BookTitle title={"Shoe Dog"} />
      <BookAuthor author={"Harper Lee"} />

      <Link to="/books/submit" className="btn btn-primary mt-4">
        Add New Book
      </Link>
    </div>
  );
}
