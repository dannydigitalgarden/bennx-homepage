import React from "react";
import { useMediaQuery } from "react-responsive";

interface Props {
  setIsModalActive: (val: boolean) => void;
}

const BannerImageFull: React.FC<Props> = ({ setIsModalActive }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="relative h-screen w-full overflow-hidden bg-cover bg-no-repeat">
      <div className="absolute top-0 right-0 bottom-0 left-0 z-0 h-full w-full">
        <img
          src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 z-[1] h-full w-full overflow-hidden bg-black bg-fixed opacity-40"></div>

      {isTabletOrMobile && (
        <div className="absolute top-0 right-0 z-[2] aspect-square  w-[120%] translate-x-[40%] translate-y-[-80%] rounded-full bg-[rgba(250,250,250,0.2)]"></div>
      )}

      <div className="p-horizontal h-full w-full">
        <div className="mx-auto h-full max-w-[1440px]">
          <div className="flex h-full flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
            <div className="z-[3] md:w-1/2 md:flex-1">
              <div className="max-w-3xl text-white">
                <div className="heading-xl">Supporting the Hunger Ride</div>
                <div className="my-6 font-roboto text-lg font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum.
                </div>
                <a
                  href="http://example.com/"
                  className="pointer-events-auto my-2 block w-full flex-shrink-0 cursor-pointer rounded-full border border-solid border-white bg-white py-[19px] px-[40px]  text-center font-roboto text-lg font-medium leading-none text-gray-900 transition duration-300 ease-in-out hover:bg-transparent hover:text-white md:my-0 md:w-fit"
                >
                  View more
                </a>
              </div>
            </div>
            <div className="relative z-[100] md:w-1/2 md:p-24">
              <button onClick={() => setIsModalActive(true)} className="pointer-events-auto mx-12 mt-12 mb-12 flex items-center justify-center">
                <span className="relative flex h-12 w-12">
                  <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 210 210"
                      xmlSpace="preserve"
                      className="translate-x-[2px] fill-[var(--primary-color)]"
                    >
                      <path d="M179.07 105 30.93 210V0l148.14 105z" />
                    </svg>
                  </span>
                </span>
                <div className="ml-6 text-white">Play video</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerImageFull;
