import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import EditMoviePage from "./pages/EditMoviePage";
import CreateMoviePage from "./pages/CreateMoviePage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/editMovie/:id" element={<EditMoviePage />} />
          <Route path="/createMovie" element={<CreateMoviePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
