import { useEffect, useState } from "react";

import "./App.css";

type MemCard = {
  image: string;
  value: string;
  found: boolean;
};

function App() {
  // store memory cards
  const [cards, setCards] = useState<MemCard[] | null>();
  const [flipped, setFlipped] = useState<number[]>([]);
  const [guess, setGuess] = useState("");

  const flipCard = (cardIndex: number) => {
    setFlipped([...flipped, cardIndex]);
  };

  const checkGuess = (userGuess: string) => {
    if (guess == "") {
      setGuess(userGuess);
      return;
    }

    if (guess == userGuess && cards) {
      alert("correct!");
      const guesses = cards.map((c) => ({ ...c, found: guess == c.value }));
      console.log(guesses);
      setCards(guesses);
    } else {
      alert("incorrect!");
    }
    setGuess(""); // reset
  };

  const createMemoryCards = () => {
    const defaultCards = [
      {
        image:
          "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg",
        value: "cat",
        found: false,
      },
      {
        image:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*",
        value: "dog",
        found: false,
      },
    ];

    // duplicate array & randomize array (not ideal)
    const dupmemcards = [...defaultCards, ...defaultCards].sort(() =>
      Math.random() > 0.5 ? 1 : -1
    );

    setCards([...dupmemcards]);
  };

  useEffect(() => {
    createMemoryCards();
  }, []);

  return (
    <div className="App">
      <p>{guess}</p>
      {cards ? (
        cards.map((card, idx) => (
          <div
            key={idx}
            onClick={() => checkGuess(card.value)}
            className="mem-card"
            style={{
              backgroundImage: `url(${card.found === true ? card.image : ""})`,
              backgroundSize: "cover",
            }}
          >
            {JSON.stringify(card.found)}
          </div>
        ))
      ) : (
        <div>no memory cards defined</div>
      )}
    </div>
  );
}

export default App;
