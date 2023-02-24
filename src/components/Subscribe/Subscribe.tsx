import React, { useEffect, useRef, MutableRefObject } from "react";
import Container from "components/Container";
import { useMediaQuery } from "react-responsive";

import cx from "classnames";

import { textReveal } from "utils/animation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
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
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const textColor = cx({ "text-white": color === "light", "text-dark": color === "dark" });

  const headingRef = useRef() as MutableRefObject<HTMLDivElement>;
  const introRef = useRef() as MutableRefObject<HTMLImageElement>;
  const buttonRef = useRef() as MutableRefObject<HTMLAnchorElement>;

  useEffect(() => {
    if (headingRef.current && buttonRef.current) {
      setTimeout(() => {
        textReveal(headingRef.current, headingRef.current, introRef.current, buttonRef.current, 0);
      }, 1000);
    }
  }, []);

  return (
    <div className="subscribe p-horizontal bg-primary-gradient relative overflow-hidden py-20 md:static">
      {isTabletOrMobile && (
        <div className="subscribe-circle-mobile  absolute top-0 right-0 z-[1] aspect-square max-h-[80%] w-full translate-x-[75%] translate-y-[-90%] scale-[2.5] rounded-full "></div>
      )}
      <Container>
        <div className="relative z-10 flex flex-col items-center md:flex-row md:items-center md:justify-between">
          <div className={cx("heading-lg mb-5 flex-shrink-0 md:mb-0", textColor)} ref={headingRef}>
            {title}
          </div>
          <div className={cx("mb-4 text-center font-roboto text-lg font-light  md:mb-0 md:px-12", textColor)} ref={introRef}>
            {intro}
          </div>
          <a
            ref={buttonRef}
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
