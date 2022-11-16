import { useEffect, useState } from "react";

import "./App.css";

type MemCard = {
  image: string;
  value: string;
};

function App() {
  // store memory cards
  const [cards, setCards] = useState<MemCard[] | null>();

  const createMemoryCards = () => {
    const defaultCards = [
      {
        image:
          "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
        value: "cat",
      },
    ];
    setCards([...defaultCards]);
  };

  useEffect(() => {
    createMemoryCards();
  }, []);

  return (
    <div className="App">
      {cards ? (
        cards.map((card) => <div>card</div>)
      ) : (
        <div>no memory cards defined</div>
      )}
    </div>
  );
}

export default App;
