import { useState } from "react";
import useFetch from "../useFetch";

export default function BookFormSubmit() {
  const { data, loading, error } = useFetch("http://localhost:3000/books");
  const [successMsg, setSuccessMsg] = useState("");
  const addBookDetails = async (bookDetails) => {
    try {
      const response = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookDetails),
      });

      if (!response.ok) {
        const err = await response.json().then((res) => res.error);
        throw new Error(err);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const title = data.get("title");
    const author = data.get("author");
    const publishedYear = parseInt(data.get("publishedYear"));
    const genre = data.get("genre").split(",");
    const language = data.get("language");
    const country = data.get("country");
    const rating = parseFloat(data.get("rating"));
    const summary = data.get("summary");
    const coverImageUrl = data.get("coverImageUrl");

    const bookDetails = {
      title,
      author,
      publishedYear,
      genre,
      language,
      country,
      rating,
      summary,
      coverImageUrl,
    };
    if (
      !title ||
      !author ||
      !publishedYear ||
      !genre ||
      !language ||
      !country ||
      !rating ||
      !summary ||
      !coverImageUrl
    ) {
      alert("Please fill all the fields");
      return;
    } else {
      addBookDetails(bookDetails);
    }
  };

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(`http://localhost:3000/books/${bookId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const err = await response.json().then((res) => res.error);
        throw new Error(err);
      }

      const data = await response.json();

      if (data) {
        setSuccessMsg(data.message);
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="display-3 mb-4">Add New Books</h1>
      <form onSubmit={handleSubmit} className="d-grid">
        <label className="form-label fs-5 text-white-50">Book Title :</label>
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          name="title"
          placeholder="Enter book name"
          required
        />
        <br />

        <label className="form-label fs-5 text-white-50">Author Name :</label>
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Enter author name"
          name="author"
          required
        />
        <br />

        <label className="form-label fs-5 text-white-50">
          Published Year :
        </label>
        <input
          type="number"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Enter published year"
          name="publishedYear"
          required
        />
        <br />

        <label className="form-label fs-5 text-white-50">Genre :</label>
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Enter genre"
          name="genre"
          required
        />
        <br />

        <label className="form-label fs-5 text-white-50">Language :</label>
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Enter language"
          name="language"
          required
        />
        <br />

        <label htmlFor="country" className="form-label fs-5 text-white-50">
          Country :
        </label>
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Enter country"
          id="country"
          name="country"
          required
        />
        <br />

        <label className="form-label fs-5 text-white-50">Rating :</label>
        <input
          type="number"
          step="0.1"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Enter rating"
          name="rating"
          required
        />
        <br />

        <label className="form-label fs-5 text-white-50">Summary :</label>
        <input
          type="text"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Summary"
          name="summary"
          required
        />
        <br />

        <label className="form-label fs-5 text-white-50">
          Cover Image Url :
        </label>
        <input
          type="url"
          className="form-control bg-dark text-white border-secondary"
          placeholder="Enter cover image URL"
          name="coverImageUrl"
          required
        />
        <br />

        <button type="submit" className="btn btn-primary px-3 py-2">
          Submit
        </button>
      </form>

      <div className="container my-5">
        <p className="text-success text-center fs-4">{successMsg}</p>
        <h3 className="display-5 text-center mb-4">Books List</h3>
        <ul className="list-group">
          {data?.map((b) => (
            <li
              key={b._id}
              className="list-group-item bg-dark text-white-50 border-secondary d-flex justify-content-between align-items-start"
            >
              {b.title}
              <button
                className="btn btn-primary"
                onClick={() => handleDelete(b._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
