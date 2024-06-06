import { useState } from "react";
import "./App.css";

const dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundItem = dictionary.find(
      (item) => item.word.toLowerCase() === word.toLowerCase()
    );

    const foundItemMeaning = foundItem
      ? foundItem.meaning
      : "Word not found in the dictionary.";

    setMeaning(foundItemMeaning);
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setWord(e.target.value)}
          value={word}
          placeholder="Search for a word..."
        />
        <button type="submit">Search</button>
      </form>
      <h3>Defintion:</h3>
      <h4>{meaning != "" && meaning}</h4>
    </div>
  );
}

export default App;
