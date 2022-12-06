import { getByTitle } from "@testing-library/react";
import { useState } from "react";
// import Giphy from "./Giphycalls";

const URL =
  "https://api.giphy.com/v1/gifs/search?api_key=JWM5aI5u0l4cieNdczozIfDEtlcZCXgU&rating=g&limit=20&q=";

function SearchMeme({ addTask }) {
  let [search, setSearch] = useState("");
  let [gifs, setgifs] = useState([]);
  let [keys, setKeys] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

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

  let SearchGifKey = () => {
    if (search.length > 0) {
      // setLoading(true);
      fetch(URL + search)
        .then((res) => {
          // setLoading(false);
          return res.json();
        })
        .then((result) => {
          setKeys(
            result.data.map((key) => {
              return key.id;
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
    addTask(userInput);
    setUserInput("");
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
            value={search || userInput}
            onChange={(e) => {
              setSearch(e.target.value);
              handleChange(e);
            }}
          />
          <button
            onClick={() => {
              SearchGif();
              SearchGifKey();
            }}
          >
            Search
          </button>
        </form>
      </div>
      <div>{/* <h2>{search}</h2> */}</div>

      <div className="result">
        {/* <div className="loading">
          <div className="loader"></div>
        </div> */}
        <div className="list">
          {gifs.map((gif) => {
            {
              return (
                <div className="item" id={gif.id}>
                  <img src={gif} alt={search} />
                </div>
              );
            }
          })}
          {/* {keys.map((key) => {})} */}
        </div>
      </div>
    </div>
  );
}
export default SearchMeme;
