import React, { useRef } from "react";
import cx from "classnames";
import { darken } from "polished";

type TextColor = "light" | "dark";

interface ButtonProps {
  url: string;
  text: string;
  background: string;
  color: TextColor;
}

const Button: React.FC<ButtonProps> = ({ url, text, background, color }) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  function onHover() {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = darken(0.04, background);
    }
  }

  function onMouseLeave() {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = background;
    }
  }

  return (
    <a
      ref={buttonRef}
      href={url}
      aria-label={text || "View more"}
      className={cx(
        "my-4 inline-block w-full cursor-pointer rounded-full  py-[19px] px-[40px] text-center font-roboto text-lg font-medium leading-none transition duration-300 ease-in-out md:w-fit",
        {
          "text-white": color === "light",
          "text-gray-900": color === "dark",
        }
      )}
      onMouseOver={onHover}
      onMouseOut={onMouseLeave}
      style={{ backgroundColor: background }}
    >
      {text}
    </a>
  );
};

export default Button;
