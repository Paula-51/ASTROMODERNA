import { Link } from 'react-router-dom';
import '../styles/layout/_tarotCard.scss';

function TarotCard({ card }) {
  return (
    <Link to={`/tarot/${card.id}`} className="tarot-card">
      <img src={card.image} alt={card.name} />
      <h3>{card.name}</h3>
      <p>{card.shortMeaning}</p>
    </Link>
  );
}

export default TarotCard;
