/* Import .json */
import emojis from "../emojis.json";

/* Import useState() from React */
import { useState } from "react";

const Search = () => {
  const [word, setWord] = useState("");

  const keyUp = (event) => {
    event.preventDefault();
    setWord(event.target.value);
  };

  //   const sentences = emojis.map((elem) => {
  //     return elem.keywords;
  //   });

  //   for (let i = 0; i < sentences.length; i++) {
  //     console.log(sentences[i]);
  //     break;
  //   }

  return (
    <header>
      <h1>EmojiSearch 🦥</h1>
      <input
        onKeyUp={keyUp}
        type="search"
        placeholder="What emoji do you want?"
        value={word}
        onChange={keyUp}
      />
    </header>
  );
};

export default Search;
