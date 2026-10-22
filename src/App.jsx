import { useState } from 'react'
import Scoreboard from './components/Scoreboard'
import CardGrid from './components/CardGrid'
import './App.css'

// TODO: replace with cards fetched from an API (see src/api/fetchCards.js)
const PLACEHOLDER_CARDS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Card ${i + 1}`,
  image: null,
}))

function App() {
  const [cards] = useState(PLACEHOLDER_CARDS)
  const [score] = useState(0)
  const [bestScore] = useState(0)

  // TODO: track which card ids have been clicked this round
  // TODO: load cards in a useEffect with fetchCards()

  function handleCardClick(id) {
    // TODO:
    // - clicked before → reset score and clicked ids (game over)
    // - new card → increment score, update bestScore if beaten
    // - shuffle the cards every click
    console.log('clicked', id)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Memory Card</h1>
        <p>
          Get points by clicking an image, but don't click any more than once!
        </p>
        <Scoreboard score={score} bestScore={bestScore} />
      </header>
      <main>
        <CardGrid cards={cards} onCardClick={handleCardClick} />
      </main>
    </div>
  )
}

export default App
