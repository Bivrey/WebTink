import { useAppContext } from "../context";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import MovieList from "./MovieList";

const Sidebar = () => {
  const { movies } = useAppContext();
  const navigate = useNavigate();
  return (
    <aside>
      <Search />
      <MovieList />
      <div className="sidebar__footer">
        <p>Найдено {movies.length} элементов</p>
        <button onClick={() => navigate("/createMovie")}>
          <AiOutlinePlus />
          Добавить
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
