import MovieTitles from "./MovieTitles";
import Results from "./Results";
import Nominations from "./Nominations";
import "./App.css";

function App() {
  return (
    <div className="App">
      <body className="container">
        <h1>The Shoppies</h1>
        <MovieTitles />
        <div className="result-box">
          <Results />
        </div>
        <div className="nom-box">
          <Nominations />
        </div>
      </body>
    </div>
  );
}

export default App;
