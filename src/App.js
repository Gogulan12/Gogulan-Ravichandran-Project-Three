import "./App.css";
import SearchMeme from "./Search";
import Header from "./Header.js";
import Footer from "./Footer";

/////////////////////////////APP FUNCTION///////////////////////////////

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
