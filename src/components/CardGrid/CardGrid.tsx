import React from "react";
import Card from "components/Card";
import Container from "components/Container";
const CardGrid = () => {
  return (
    <div className="p-horizontal bg-white  py-28">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Container>
    </div>
  );
};

export default CardGrid;
