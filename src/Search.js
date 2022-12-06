// import { getByTitle } from "@testing-library/react";
import { useState } from "react";
// import Giphy from "./Giphycalls";
import ToDoList from "./ToDoList";
import data from "./data.json";

const URL =
  "https://api.giphy.com/v1/gifs/search?api_key=JWM5aI5u0l4cieNdczozIfDEtlcZCXgU&rating=g&limit=20&q=";

function SearchMeme() {
  let [search, setSearch] = useState("");
  let [gifs, setgifs] = useState([]);
  let [keys, setKeys] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [toDoList, setToDoList] = useState(data);
  const [apidata, setApiData] = useState([]);

  /////////////////////HISTORY LIST ///////////////////////

  //////////////////CROSS OUT HISTORY////////////////
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id == id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };
  /////////////////////Add input to list/////////////////////
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false },
    ];
    setToDoList(copy);
  };

  ///////////////////////CHANGE IN INPUT////////////////////////////
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  ///////////////////////URL SEARCH////////////////////////////////
  let SearchGif = () => {
    if (search.length > 0) {
      fetch(URL + search)
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          // console.log(result.data);
          setApiData(result.data);
          // console.log(apidata);
          setgifs(
            result.data.map((gif) => {
              return gif.images.fixed_height.url;
            })
          );
        })
        .catch(() => {
          alert("something went wrong");
        });
    }
  };

  //////////////////////////ID SEARCH////////////////////////////////
  // let SearchGifKey = () => {
  //   if (search.length > 0) {
  //     // setLoading(true);
  //     fetch(URL + search)
  //       .then((res) => {
  //         // setLoading(false);
  //         return res.json();
  //       })
  //       .then((result) => {
  //         setKeys(
  //           result.data.map((key) => {
  //             // console.log(key.id);
  //             return key.id;
  //           })
  //         );
  //       })
  //       .catch(() => {
  //         // setLoading(false);
  //         alert("something went wrong");
  //       });
  //   }
  // };
  /////////////////////////////SUBMIT FORM//////////////////////////////
  const handleSubmit = (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    console.log("form submitted ✅");
    addTask(userInput);
    setUserInput("");
  };

  //////////////////////////RETURN FUNCTION///////////////////

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
              // SearchGifKey();
            }}
          >
            Search
          </button>
        </form>
      </div>
      <div className="searchHistory">
        <h3>SEARCH HISTORY</h3>
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} />
      </div>

      <div className="result">
        <div className="list">
          {/* {gifs.map((gif) => {
            {
              return (
                <div className="item" id={keys.id}>
                  <img src={gif} alt={search} />
                </div>
              );
            }
          })} */}
          {apidata.map((data) => {
            // console.log(data);
            return (
              <div className="item " key={data.id}>
                <img src={data.images.fixed_height.url} alt={search} />
              </div>
            );
          })}

          {/* {keys.map((key) => {})} */}
        </div>
      </div>
    </div>
  );
}
export default SearchMeme;
