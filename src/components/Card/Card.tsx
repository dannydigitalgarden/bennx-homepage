import React from "react";
import Button from "components/Button";

import dollarIcon from "assets/icons/dollar.svg";

const Card = () => {
  return (
    <div className="w-full">
      <div className="block rounded-[3px] bg-white py-10 px-6 shadow-[0_2px_15px_0_rgba(0,0,0,0.05)]">
        <div className="mb-6 flex items-center">
          <div className="mr-4 h-[40px] w-[40px]">
            <img className="h-full w-full object-contain" src={dollarIcon} alt="icon" />
          </div>
          <div className="heading-md text-gray-900">Card title</div>
        </div>
        <div className="mb-2 text-lg text-gray-900">Some quick example text to build on the card title and make up the bulk of the card's content.</div>
        <Button text="View more" url="#" />
      </div>
    </div>
  );
};

export default Card;
