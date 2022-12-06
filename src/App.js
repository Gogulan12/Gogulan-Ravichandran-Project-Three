import "./App.css";
import SearchMeme from "./Search";
import Header from "./Header.js";
import Footer from "./Footer";
import ToDoList from "./ToDoList";
import { useState, useEffect } from "react";
import data from "./data.json";
// import ToDoForm from "./ToDoForm";

/////////////////////////////APP FUNCTION

function App() {
  // const [toDoList, setToDoList] = useState(data);

  // const handleToggle = (id) => {
  //   let mapped = toDoList.map((task) => {
  //     return task.id == id
  //       ? { ...task, complete: !task.complete }
  //       : { ...task };
  //   });
  //   setToDoList(mapped);
  // };

  // const addTask = (userInput) => {
  //   let copy = [...toDoList];
  //   copy = [
  //     ...copy,
  //     { id: toDoList.length + 1, task: userInput, complete: false },
  //   ];
  //   setToDoList(copy);
  // };

  return (
    <>
      <div id="container">
        <div className="App">
          <Header />
          <SearchMeme />
          {/* <ToDoList toDoList={toDoList} handleToggle={handleToggle} /> */}
          {/* <ToDoForm addTask={addTask}/> */}
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
