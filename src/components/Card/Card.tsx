import React from "react";
import Button from "components/Button";

import dollarIcon from "assets/icons/dollar.svg";

export interface CardProps {
  icon: string;
  title: string;
  intro: string;
  button: {
    text: string;
    url: string;
  };
}

const Card: React.FC<CardProps> = ({ icon, title, intro, button }) => {
  return (
    <div className="w-full">
      <div className="block rounded-[3px] bg-white py-10 px-6 shadow-[0_2px_15px_0_rgba(0,0,0,0.05)]">
        <div className="mb-6 flex items-center">
          <div className="mr-4 h-[40px] w-[40px]">
            <img className="h-full w-full object-contain" src={icon} alt={title} />
          </div>
          <div className="heading-md text-gray-900">{title}</div>
        </div>
        <div className="mb-2 text-lg text-gray-900">{intro}</div>
        <Button text={button.text} url={button.url} />
      </div>
    </div>
  );
};

export default Card;
