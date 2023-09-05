import { Card, Container } from './style';
import useCard from './useCard';

export default function CardInfos() {
  const { cards } = useCard();

  return (
    <Container>

      {cards.map((card) => (
        <Card key={card.id}>
          <span>
            <card.Icon />
          </span>

          <div className="content">
            <h3>{card.title}</h3>
            <ul>
              <li><small>{card.li1}</small></li>
              <li><small>{card.li2}</small></li>
              <li><small>{card.li3}</small></li>
            </ul>
          </div>
        </Card>
      ))}

    </Container>
  );
}
