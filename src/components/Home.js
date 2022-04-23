import logo from "../logo/IMDWee_LOGO.jpg";
import "../App.css";
import Textbox from "../components/Textbox";
import Results from "../components/Results";

const Home = ({
  search,
  setSearch,
  actor,
  setActor,
  primaryMovies,
  setPrimaryMovies,
  searchActor,
  searchMovies,
  movies,
}) => {
  const inputActor = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };
  console.log(actor);
  console.log(movies);
  return (
    <div>
      <Textbox
        search={search}
        logo={logo}
        inputActor={inputActor}
        searchActor={searchActor}
        searchMovies={searchMovies}
        actor={actor}
      />

      {actor.name.length > 1 && <Results actor={actor} movies={movies} />}
    </div>
  );
};

export default Home;
