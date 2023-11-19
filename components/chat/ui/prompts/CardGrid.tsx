import React from 'react';
import Card from './Card';

interface CardGridProps {
  data: {
    id: number;
    title: string;
    description: string;
    prompt: string;
  }[];
}

const CardGrid: React.FC<CardGridProps> = ({ data }) => (
  <div className="flex flex-wrap justify-center">
    {data.map(card => (
      <Card key={card.id} {...card} />
    ))}
  </div>
);

export default CardGrid;