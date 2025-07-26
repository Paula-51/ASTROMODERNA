import { useParams } from 'react-router-dom';
import tarotData from '../data/tarotData';

function TarotDetail() {
  const { id } = useParams();
  const card = tarotData.find((c) => c.id === id);

  if (!card) return <p>Carta no encontrada.</p>;

  return (
    <section className="tarot-detail">
      <img src={card.image} alt={card.name} />
      <h2>{card.name}</h2>
      <p>{card.fullMeaning}</p>
    </section>
  );
}

export default TarotDetail;
