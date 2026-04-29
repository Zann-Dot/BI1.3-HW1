import useFetch from "../useFetch";
export default function BookAuthor({ author, API_URL }) {
  const { data, loading, error } = useFetch(
    `${API_URL}/books/author/${author}`,
  );

  return data ? (
    <div>
      <h2 className="display-5 mt-4">Books By {author}</h2>
      <ul className="list-group list-group-numbered">
        {data?.map((b) => (
          <li
            key={b._id}
            className="list-group-item bg-dark text-light border-secondary"
          >
            {b.title}
          </li>
        ))}
      </ul>
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
}
