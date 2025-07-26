import tarotData from '../data/tarotData';
import TarotCard from '../components/TarotCard';
import '../styles/components/_tarotCard.scss';

function Tarot() {
  return (
    <section className="tarot-gallery">
      <h2>Explora los Arkanos del Tarot</h2>
      <div className="card-grid">
        {tarotData.map((card) => (
          <TarotCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}

export default Tarot;
