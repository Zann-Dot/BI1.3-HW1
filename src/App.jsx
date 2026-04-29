import Books from "./BI1.1 HW1/Books";
import BookFormSubmit from "./BI1.2 HW1/BookFormSubmit";
import { Route, Routes } from "react-router";
const API_URL = import.meta.env.BACKEND_URL || "https://localhost:3000";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Books />} API_URL={API_URL} />
        <Route
          path="/books/submit"
          element={<BookFormSubmit />}
          API_URL={API_URL}
        />
      </Routes>
    </>
  );
}

export default App;
