import "./App.css";
import SearchMeme from "./Search";
import Header from "./Header.js";
import Footer from "./Footer";
import Giphy from "./Giphycalls";
import { useState, useEffect } from "react";

/////////////////////////////APP FUNCTION

function App() {
  return (
    <>
      <div id="container">
        <div className="App">
          <Header />
          <SearchMeme />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

// /////////////////////////FORM FUNCTION//////////////////////////////
// function Searchform() {
//   const [word, setWord] = useState();
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("test");
//     setWord("");
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <fieldset>
//         <legend>Search Term</legend>
//         <input
//           value={word}
//           onChange={(e) => setWord(e.target.value)}
//           placeholder="Word"
//         />
//         <button>search</button>
//       </fieldset>
//     </form>
//   );
// }

// ///////////////////////LIST FUNCTION////////////////////////////////
// function Searchterm(props) {
//   return <li></li>;
// }

// //////////////////DISPLAY IMAGE FUNCTION////////////////////////////
// function Memeimages() {}
