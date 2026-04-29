import useFetch from "../useFetch";
export default function BookTitle({ title, API_URL }) {
  const { data, loading, error } = useFetch(`${API_URL}/books/title/${title}`);

  return data ? (
    <div>
      <h2 className="display-5 mt-4">{data.title}</h2>
      <p>
        <b>Author:</b> {data.author}
      </p>
      <p>
        <b>Language:</b> {data.language}
      </p>
      <p>
        <b>Published:</b> {data.publishedYear}
      </p>
      <p>
        <b>Ratings:</b> {data.rating}
      </p>
      <p>
        <b>Genre:</b> {data.genre?.join(", ")}
      </p>
      <p>
        <b>Summary:</b> {data.summary}
      </p>
      <p>
        <b>Country:</b> {data.country}
      </p>
      <img src={data.coverImageUrl} alt="Cover Image" />
    </div>
  ) : (
    loading && <p>Loading...</p>
  );
}
