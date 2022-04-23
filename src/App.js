import "./App.css";
import Home from "./components/Home";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [actor, setActor] = useState({ name: "", id: "", image: "" });
  const [primaryMovies, setPrimaryMovies] = useState({
    movieId: "",
    title: "",
  });
  const [movies, setMovies] = useState([]);

  const searchMovies = async (id) => {
    const options = {
      method: "GET",
      url:
        "https://online-movie-database.p.rapidapi.com/actors/get-all-filmography",
      params: { nconst: actor.id },
      headers: {
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        "X-RapidAPI-Key": "iPxYj0SjxxHJproXNwsgNGBx5rj3yf3a",
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.filmography);

        // setPrimaryMovies({
        //   movieId: response.data.filmography[0].id,
        //   title: response.data.filmography[0].title,
        // });
        // console.log(primaryMovies);
        // console.log(primaryMovies.movieId, primaryMovies.title);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const searchActor = async (e) => {
    // console.log("search", search);
    const options = {
      method: "GET",
      url: "https://online-movie-database.p.rapidapi.com/auto-complete",
      params: { q: search },
      headers: {
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
        "X-RapidAPI-Key": "iPxYj0SjxxHJproXNwsgNGBx5rj3yf3a",
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        setActor({
          name: response.data.d[0].l,
          id: response.data.d[0].id,
          image: response.data.d[0].i.imageUrl,
        });
      })
      .catch(function (error) {
        console.error(error);
      });

    // console.log(actor.id);
  };

  return (
    <div className='App'>
      <Home
        search={search}
        setSearch={setSearch}
        actor={actor}
        setActor={setActor}
        primaryMovies={primaryMovies}
        setPrimaryMovies={setPrimaryMovies}
        searchMovies={searchMovies}
        searchActor={searchActor}
        movies={movies}
      />
    </div>
  );
};

export default App;
