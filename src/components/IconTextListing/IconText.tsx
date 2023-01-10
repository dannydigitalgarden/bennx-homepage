import React from "react";

import arrow from "assets/icons/performance.svg";

interface IconTextProps {
  text: string;
  iconDark: string;
  iconLight: string;
  url: string;
}

const IconText: React.FC<IconTextProps> = ({ iconDark, iconLight, text, url }) => {
  return (
    <a
      href={url}
      className="group flex w-full flex-row items-center 
      rounded-[3px] border border-solid border-[#e6e6e6] bg-white px-5 py-3 
      shadow-[0_0_5px_0_rgba(0,0,0,0.08)] transition duration-300 
      hover:border-[var(--primary-color)] hover:bg-[var(--primary-color)] md:w-[190px] md:flex-col  
      md:justify-center md:px-12 md:py-6 md:shadow-[5px_0_15px_0_rgba(0,0,0,0.05)]"
    >
      <div className="h-[30px] w-[30px]">
        <img className="max-h-full max-w-full group-hover:hidden" src={iconDark} alt={text} />
        <img className="hidden max-h-full max-w-full group-hover:block" src={iconLight} alt={text} />
      </div>
      <div className="mx-4 font-roboto text-base font-medium text-gray-900 transition group-hover:text-white md:ml-0">{text}</div>
      <div className="ml-auto md:hidden">
        <svg width="9" height="16" viewBox="0 0 9 16">
          <path
            fill="#282728"
            className="group-hover:fill-white"
            d="M.3 14.3c-.4.4-.4 1.02 0 1.4.38.4 1 .4 1.4 0l7-7c.4-.4.4-1.02 0-1.4l-7-7C1.3-.1.68-.1.3.3c-.4.38-.4 1 0 1.4L6.6 8 .3 14.3z"
          ></path>
        </svg>
      </div>
    </a>
  );
};

export default IconText;
