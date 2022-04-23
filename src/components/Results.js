const Results = ({ movies, actor, primaryMovies }) => {
  return (
    <>
      <div>Actor: {actor.name}</div>
      <div>Actor ID: {actor.id}</div>
      <img alt='actor' src={actor.image} style={{ width: 280, height: 400 }} />
      <div>
        Movie List:
        {movies?.map((movie, index) => (
          <h3 key={index} alt={movie.movieId}>
            {movie.title}
          </h3>
        ))}
      </div>
    </>
  );
};

export default Results;
