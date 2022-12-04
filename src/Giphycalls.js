import SearchMeme from "./Search";

function Giphy(props) {
  return (
    <div>
      <h1>{props.word}</h1>
    </div>
  );
}

export default Giphy;

// Create a namespace for our app:
const memeApp = {};

// An initializer function! The first thing that will be called, and it will start all other parts of our app up and running.
memeApp.init = () => {
  memeApp.getMeme();

  // memeApp.getUserInput();
};

// A function for our API call! This will go get the art from the Rijksmuseum
memeApp.getMeme = () => {
  // Create a new URL object, add query (search) parameters, and then make the fetch call.
  // const url = new URL(`https://api.giphy.com/v1/gifs/trending`);
  const url = new URL(`https://api.giphy.com/v1/gifs/search`);

  url.search = new URLSearchParams({
    api_key: "JWM5aI5u0l4cieNdczozIfDEtlcZCXgU",
    rating: "g",
    q: "dog",
  });

  fetch(url)
    .then((results) => results.json())
    .then((data) => {
      // console.log(data.data);
      let list0fImages = data.data;
      memeApp.list(list0fImages);
    });
};

memeApp.list = (listofmemes) => {
  for (let i = 0; i < listofmemes.length; i++) {
    console.log(listofmemes[i].images.downsized.url);
    const memeImage = document.createElement("img");
    memeImage.src = listofmemes[i].images.downsized.url;
    memeImage.alt = "Meme Image";
    document.querySelector("div").append(memeImage);

    // const memeList = document.createElement("li");

    // document.querySelector(".list").append(memeList);
  }
  // console.log(listofmemes[0]);
};

// // Function will get users input
// memeApp.getUserInput = () => {};

// Call the init function to kick our app off! This will always be at the bottom of our file.
memeApp.init();
