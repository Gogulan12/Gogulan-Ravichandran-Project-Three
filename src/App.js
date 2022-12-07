import "./App.css";
import Header from "./Header.js";
import SearchMeme from "./Search";
import Footer from "./Footer";

/////////////////////////////APP FUNCTION///////////////////////////////

function App() {
  return (
    <>
      <div id="container">
        <div className="App">
          <Header />
          <main>
            <SearchMeme />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
