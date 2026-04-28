import Books from "./BI1.1 HW1/Books";
import BookFormSubmit from "./BI1.2 HW1/BookFormSubmit";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/submit" element={<BookFormSubmit />} />
      </Routes>
    </>
  );
}

export default App;
