const Textbox = ({ logo, searchActor, inputActor, searchMovies, actor }) => {
  // const handleClick = () => {
  //   searchActor();
  //   searchMovies(actor.id);
  // };

  return (
    <div>
      <img src={logo} alt='' className='App-logo' />
      <br></br>
      <input
        type='text'
        placeholder="Type in an Actor's name"
        onChange={inputActor}
      />
      <br></br>
      <button onClick={() => searchActor()}>Search Actor</button>
      <button onClick={() => searchMovies(actor.id)}>Search Movies</button>
    </div>
  );
};

export default Textbox;
