import useFetch from "../useFetch";
import BookTitle from "./BookTitle";
import BookAuthor from "./BookAuthor";
import { Link } from "react-router";

export default function Books({ API_URL }) {
  const { data, loading, error } = useFetch(`${API_URL}/books`);
  console.log(data);

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
      <BookTitle title={"Shoe Dog"} API_URL={API_URL} />
      <BookAuthor author={"Harper Lee"} API_URL={API_URL} />

      <Link to="/books/submit" className="btn btn-primary mt-4">
        Add New Book
      </Link>
    </div>
  );
}
