import Card from './Card'

function CardGrid({ cards, onCardClick }) {
  return (
    <ul className="card-grid">
      {cards.map((card) => (
        <li key={card.id}>
          <Card card={card} onClick={onCardClick} />
        </li>
      ))}
    </ul>
  )
}

export default CardGrid
