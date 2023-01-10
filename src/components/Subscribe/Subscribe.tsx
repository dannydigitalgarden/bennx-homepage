import React from "react";
import Container from "components/Container";
import { useMediaQuery } from "react-responsive";

import cx from "classnames";

interface SubscribeProps {
  title: string;
  intro: string;
  color: string;
  button: {
    text: string;
    url: string;
  };
}

const Subscribe: React.FC<SubscribeProps> = ({ title, intro, button, color }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const textColor = cx({ "text-white": color === "light", "text-dark": color === "dark" });
  return (
    <div className="p-horizontal bg-primary-gradient relative overflow-hidden py-20">
      {isTabletOrMobile && (
        <div className="subscribe-circle-mobile  absolute top-0 right-0 z-[1] aspect-square max-h-[80%] w-full translate-x-[75%] translate-y-[-90%] scale-[2.5] rounded-full "></div>
      )}
      <Container>
        <div className="relative z-10 flex flex-col items-center md:flex-row md:items-center md:justify-between">
          <div className={cx("heading-lg mb-5 flex-shrink-0 md:mb-0", textColor)}>{title}</div>
          <div className={cx("mb-4 text-center font-roboto text-lg font-light  md:mb-0 md:px-12", textColor)}>{intro}</div>
          <a
            href={button.url}
            className="my-2 block w-full flex-shrink-0 cursor-pointer rounded-full border border-solid border-white bg-white py-[19px] px-[40px]  text-center font-roboto text-lg font-medium leading-none text-gray-900 transition duration-300 ease-in-out hover:bg-transparent hover:text-white md:my-0 md:w-fit"
          >
            {button.text}
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Subscribe;
