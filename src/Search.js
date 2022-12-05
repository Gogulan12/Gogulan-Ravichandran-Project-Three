import { useState } from "react";
// import Giphy from "./Giphycalls";

const URL =
  "https://api.giphy.com/v1/gifs/search?api_key=JWM5aI5u0l4cieNdczozIfDEtlcZCXgU&rating=g&limit=20&q=";

function SearchMeme() {
  let [search, setSearch] = useState("");
  let [gifs, setgifs] = useState([]);
  // let [loading, setLoading] = useState(false);
  let SearchGif = () => {
    if (search.length > 0) {
      // setLoading(true);
      fetch(URL + search)
        .then((res) => {
          // setLoading(false);
          return res.json();
        })
        .then((result) => {
          setgifs(
            result.data.map((gif) => {
              return gif.images.fixed_height.url;
            })
          );
        })
        .catch(() => {
          // setLoading(false);
          alert("something went wrong");
        });
    }
  };

  const handleSubmit = (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    console.log("form submitted ✅");
  };

  return (
    <div className="App">
      <div className="header">
        <h1>MEME GENERATOR</h1>
        <p>search for the perfect meme!!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={SearchGif}>Search</button>
        </form>
      </div>
      <div>
        <h2>{SearchGif}</h2>
      </div>

      <div className="result">
        {/* <div className="loading">
          <div className="loader"></div>
        </div> */}
        <div className="list">
          {gifs.map((gif) => {
            return (
              <div className="item">
                <img src={gif} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default SearchMeme;
