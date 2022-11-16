import { useState } from "react";

import "./App.css";

function App() {
  // store memory cards
  const [cards, setCards] = useState([]);

  return (
    <div className="App">
      {cards.length > 0 ? (
        cards.map((card) => <div>card</div>)
      ) : (
        <div>no memory cards defined</div>
      )}
    </div>
  );
}

export default App;
