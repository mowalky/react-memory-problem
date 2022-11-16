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
      {
        image:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*",
        value: "dog",
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
        cards.map((card) => <div className="mem-card">{card.image}</div>)
      ) : (
        <div>no memory cards defined</div>
      )}
    </div>
  );
}

export default App;
