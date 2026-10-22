function Card({ card, onClick }) {
  return (
    <button type="button" className="card" onClick={() => onClick(card.id)}>
      {card.image && <img src={card.image} alt="" />}
      <span>{card.name}</span>
    </button>
  )
}

export default Card
