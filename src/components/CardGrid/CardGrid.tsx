import React from "react";
import Card from "components/Card";
import Container from "components/Container";
import { CardProps } from "../Card/Card";

interface CardGridProps {
  items: Array<any>;
}
const CardGrid: React.FC<CardGridProps> = ({ items }) => {
  return (
    <div className="p-horizontal flex  h-full items-center bg-white py-28">
      <Container>
        {items?.length > 0 && (
          <div className="grid gap-10 md:grid-cols-2">
            {items.map((item: CardProps, index: number) => (
              <Card key={index} {...item} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default CardGrid;
