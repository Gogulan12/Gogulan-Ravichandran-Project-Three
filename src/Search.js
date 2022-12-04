import { useState } from "react";
import Giphy from "./Giphycalls";

function SearchMeme() {
  const [word, setWord] = useState("");
  const [print, setPrint] = useState(false);

  //////////////DISPLAY WORD FUNCTION////////////////////
  const displayHandler = () => {
    setPrint(true);
    // const savedWord = word;
  };

  //////////////HANDLE SUBMIT////////////////////
  const handleSubmit = (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    console.log("form submitted ✅");
  };
  //////////////TARGETS THE INPUT FUNCTION ////////////////////
  const showWord = (e) => {
    setWord(e.target.value);

    setPrint(false);
  };

  /////////////RETURN THE FORM//////////////////////
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Search..." onChange={showWord} />
        <button type="submit" onClick={displayHandler}>
          Search
        </button>
      </form>
      {print ? <h3>{word}</h3> : ""}
      <Giphy print={print} word={word} />
    </div>
  );
}

export default SearchMeme;
