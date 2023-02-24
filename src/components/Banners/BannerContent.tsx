import React from "react";
import cx from "classnames";
import Button from "components/Button";

type TextColor = "light" | "dark";

interface BannerContentProps {
  color: TextColor;
}
const BannerContent: React.FC<BannerContentProps> = ({ color }) => {
  return (
    <div
      className={cx("max-w-3xl", {
        "text-white": color === "light",
        "text-gray-900": color === "dark",
      })}
    >
      <div className="heading-xl">Supporting the Hunger Ride</div>
      <div className="my-6 font-roboto text-lg font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum.
      </div>
      {color === "light" ? (
        <a
          href="#"
          className="my-2 block w-full flex-shrink-0 cursor-pointer rounded-full border border-solid border-white bg-white py-[19px] px-[40px]  text-center font-roboto text-lg font-medium leading-none text-gray-900 transition duration-300 ease-in-out hover:bg-transparent hover:text-white md:my-0 md:w-fit"
        >
          View more
        </a>
      ) : (
        <Button url="#" text="View more" />
      )}
    </div>
  );
};

export default BannerContent;
