import "./App.css";
import { useState } from "react";

export default function App() {
  const foodItems = {
    "🍇": "Grapes",
    "🍈": "Melon",
    "🍉": "Watermelon",
    "🍊": "Tangerine",
    "🍋": "Lemon",
    "🍌": "Banana",
    "🍍": "Pineapple",
    "🥭": "Mango",
    "🍎": "Red Apple",
    "🍏": "Green Apple",
    "🍐": "Pear",
    "🍑": "Peach",
    "🍒": "Cherries",
    "🍓": "Strawberry",
    "🥥": "Coconut",
    "🥑": "Avocado",
    "🍆": "Eggplant",
    "🥔": "Potato",
    "🥕": "Carrot",
    "🌽": "Corn",
    "🌶️": "Hot Pepper",
    "🥯": "Bagel",
    "🥞": "Pancakes",
    "🧇": "Waffle",
    "🧀": "Cheese Wedge",
    "🍖": "Meat",
    "🍗": "Poultry Leg",
    "🥩": "Cut of Meat",
    "🥓": "Bacon",
    "🍔": "Hamburger",
    "🍟": "French Fries",
    "🍕": "Pizza",
    "🌭": "Hot Dog",
    "🥪": "Sandwich",
    "🌮": "Taco",
    "🌯": "Burrito",
    "🥚": "Egg",
  };
  let [userInput, setuserInput] = useState("Translation Will appear here");
  const foodEmojis = Object.keys(foodItems);
  function inputEventHandler(event) {
    userInput = event.target.value;
    if (userInput in foodItems) {
      setuserInput(foodItems[userInput]);
    } else {
      setuserInput("No match Found");
    }
  }
  function ClickInput(event) {
    userInput = event.target.innerText;
    setuserInput(foodItems[userInput]);
  }
  return (
    <div className="App">
      <h1>Food Emojis Translator</h1>
      <input onChange={inputEventHandler}></input>
      <div className="output">{userInput}</div>
      <div className="view-list">
        {foodEmojis.map((emoji) => (
          <span onClick={ClickInput}>{emoji}</span>
        ))}
      </div>
    </div>
  );
}
