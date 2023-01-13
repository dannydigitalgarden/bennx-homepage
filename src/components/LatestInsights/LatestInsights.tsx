import Container from "components/Container";
import React from "react";
import Button from "components/Button";
import InsightCard from "components/InsightCard";
import { InsightProps } from "components/InsightCard/InsightCard";
interface LatestInsightsProps {
  title: string;
  items: Array<InsightProps>;
  button: any;
}

const LatestInsights: React.FC<LatestInsightsProps> = ({ title, items, button }) => {
  return (
    <div className="p-horizontal pb-10 xl:py-36">
      <Container>
        <div className="mb-12 flex flex-col items-start  md:flex-row md:items-center md:justify-between">
          <div className="heading-xl mb-5 text-4xl text-gray-900 md:mb-0">{title}</div>
          <Button {...button} />
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-4 xl:gap-10 ">
          {items?.length > 0 && items.map((item, index) => <InsightCard key={index} {...item} />)}
        </div>
      </Container>
    </div>
  );
};

export default LatestInsights;
