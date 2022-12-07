import { useState } from "react";

import ToDoList from "./ToDoList";

const URL =
  "https://api.giphy.com/v1/gifs/search?api_key=JWM5aI5u0l4cieNdczozIfDEtlcZCXgU&rating=g&limit=20&q=";

////////////////SearchMeme FUNCTION//////////////////////////////////

function SearchMeme() {
  const [search, setSearch] = useState("");
  const [userInput, setUserInput] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [apidata, setApiData] = useState([]);

  /////////////////////HISTORY LIST ////////////////////////////////

  //////////////////CROSS OUT HISTORY////////
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return Number(task.id) === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };
  /////////////////////Add input to list//////////
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      {
        id: toDoList.length + 1,
        task: userInput,
        complete: false,
      },
    ];
    setToDoList(copy);
  };

  ///////////////remove selected input from list///////////////

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  ///////////////////////CHANGE IN INPUT SEARCH BAR////////////////////////////
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
          setApiData(result.data);
        })
        .catch(() => {
          alert("something went wrong");
        });
    }
  };

  /////////////////////////////SUBMIT FORM//////////////////////////////
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("form submitted ✅");
    addTask(userInput);
    setUserInput("");
    setSearch("");
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
            }}
          >
            Search
          </button>
        </form>
      </div>

      <div className="searchHistory">
        <h3>SEARCH HISTORY</h3>
        <ToDoList
          toDoList={toDoList}
          handleToggle={handleToggle}
          handleFilter={handleFilter}
        />
      </div>

      <div className="result">
        <div className="list wrapper">
          {apidata.map((data) => {
            return (
              <div className="item " key={data.id}>
                <img src={data.images.fixed_height.url} alt={search} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default SearchMeme;
