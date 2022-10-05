import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🍎": "Red Apple",
  "🍅": "Tomato",
  "🍓": "Strawberry",
  "🥦": "Broccoli",
  "🥪": "Sandwich",
  "🥚": "Egg",
  "🍿": "Popcorn",
  "🍦": "Soft Ice Cream",
  "🍩": "Doughnut",
  "🍪": "Cookie",
  "🍫": "Chocolate Bar",
  "🍺": "Beer Mug",
  "🍷": "Wine Glass"
};

var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

//     console.log(meaning);

    if (meaning === undefined) {
      meaning = "We don't have this yet in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Food & Drinks Emoji Interpretor</h1>
      <input onChange={inputHandler} />
      <h2> {meaning} </h2>
      <h3> Emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
