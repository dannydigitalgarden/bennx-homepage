import React, { useRef, useState, useEffect } from "react";
import cx from "classnames";
import { darken } from "polished";

type TextColor = "light" | "dark";

interface ButtonProps {
  url: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ url, text }) => {
  const [background, setBackground] = useState("");

  return (
    <a
      href={url}
      aria-label={text || "View more"}
      className="my-4 inline-block w-full cursor-pointer rounded-full bg-[var(--primary-color)] py-[19px] px-[40px]  text-center font-roboto text-lg font-medium leading-none text-white transition duration-300 ease-in-out hover:bg-[var(--hover-color)] md:w-fit"
    >
      {text}
    </a>
  );
};

export default Button;
