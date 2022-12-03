import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header.js";

/////////////////////////////APP FUNCTION
function App(props) {
  return (
    <div className="App">
      <Header />

      <Searchform />

      <ul>
        <Searchterm />
      </ul>

      <Memeimages />
    </div>
  );
}

export default App;

/////////////////////////FORM FUNCTION//////////////////////////////
function Searchform() {
  const [word, setWord] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    console.log("test");
    setWord("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Search Term</legend>
        <input
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Word"
        />
        <button>search</button>
      </fieldset>
    </form>
  );
}

///////////////////////LIST FUNCTION////////////////////////////////
function Searchterm(props) {
  return <li></li>;
}

//////////////////DISPLAY IMAGE FUNCTION////////////////////////////
function Memeimages() {}
