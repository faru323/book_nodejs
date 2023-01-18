import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthorDetail from "./components/AuthorDetail";
import BookDetail from "./components/BookDetail";
import Navbar from "./components/Navbar";
import AddNewBook from "./pages/AddNewBook";
import Authors from "./pages/Authors";
import Books from "./pages/Books";

function App() {
  return <div className="App">
 <BrowserRouter>
 <Navbar/>
 <Routes>
 
 <Route path="/authors" element={<Authors/>} />
 <Route path="/books" element={<Books/>} />
 <Route path="/addnew" element={<AddNewBook/>} />
 <Route path="/books/:id" element={<BookDetail/>} />
 <Route path="/authors/:id" element={<AuthorDetail/>} />
 </Routes>
 </BrowserRouter>
  </div>;
}

export default App;
