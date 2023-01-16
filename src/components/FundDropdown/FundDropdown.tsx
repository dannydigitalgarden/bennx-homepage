import React, { useEffect, useState, useRef, MutableRefObject } from "react";
import { useMediaQuery } from "react-responsive";
import useOnClickOutside from "hooks/useOnClickOutside";

type Option = {
  text: string;
  url: string;
};

interface FundDropdownProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: (value: boolean) => void;
  selectText?: string;
  options: Array<Option>;
}

const FundDropdown: React.FC<FundDropdownProps> = ({ isDropdownOpen, setIsDropdownOpen, selectText, options }) => {
  const dropdownRef = useRef() as MutableRefObject<HTMLDivElement>;

  useOnClickOutside(dropdownRef, () => setIsDropdownOpen(false));

  const handleOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`dropdown relative rounded-[22px] border border-black bg-white shadow-[0_0_15px_0_rgba(0,0,0,0.1)] ${
        isDropdownOpen ? "rounded-b-none border-b-0" : ""
      }`}
      ref={dropdownRef}
    >
      <button className="flex w-full  items-center  p-6" onClick={handleOpen}>
        <div className="mr-3">
          <svg width={24} height={24} viewBox="0 0 58 58" xmlns="http://www.w3.org/2000/svg">
            <g fill="#282728" fillRule="nonzero">
              <path
                d="M29 57C13.536 57 1 44.464 1 29S13.536 1 29 1s28 12.536 28 28c-.018 15.457-12.543 27.982-28 28zm0-54.4C14.42 2.6 2.6 14.42 2.6 29c0 14.58 11.82 26.4 26.4 26.4 14.58 0 26.4-11.82 26.4-26.4C55.384 14.426 43.574 2.616 29 2.6z"
                stroke="#282728"
                strokeWidth={0.3}
              />
              <path d="M52.934 18.56a.767.767 0 0 1-.356-.088c-6.064-3.146-14.654-4.95-23.569-4.95-8.914 0-17.504 1.804-23.569 4.95a.773.773 0 0 1-1.145-.715.77.77 0 0 1 .433-.651C11.098 13.8 19.72 11.98 29.01 11.98c9.29 0 17.911 1.82 24.281 5.126a.77.77 0 0 1-.356 1.453zM29 46.02c-9.3 0-17.927-1.823-24.29-5.134a.77.77 0 1 1 .713-1.367c6.059 3.152 14.651 4.96 23.577 4.96 8.926 0 17.518-1.808 23.577-4.96a.77.77 0 1 1 .713 1.367C46.927 44.196 38.3 46.02 29 46.02z" />
              <path d="M28.451 57c-8.005 0-14.275-12.3-14.275-28s6.27-28 14.275-28 14.274 12.3 14.274 28-6.27 28-14.274 28zm0-54.4c-6.996 0-12.688 11.84-12.688 26.4 0 14.56 5.692 26.4 12.688 26.4S41.139 43.56 41.139 29c0-14.56-5.692-26.4-12.688-26.4z" />
              <path
                d="M29 55.902c-.303 0-.549-.344-.549-.769V2.867c0-.425.246-.769.549-.769.303 0 .549.344.549.769v52.266c0 .425-.246.769-.549.769z"
                stroke="#282728"
                strokeWidth={0.5}
              />
              <path
                d="M55.133 29.549H2.867c-.425 0-.769-.246-.769-.549 0-.303.344-.549.769-.549h52.266c.425 0 .769.246.769.549 0 .303-.344.549-.769.549z"
                stroke="#282728"
                strokeWidth={0.5}
              />
            </g>
          </svg>
        </div>
        <div className="font-roboto text-lg font-light text-gray-900">{selectText || "Select one of our funds"}</div>
        <div className="ml-auto">
          <svg
            className={`transition-all duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
            fill="#282728"
            height={10}
            width={10}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xmlSpace="preserve"
          >
            <path
              id="XMLID_225_"
              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            />
          </svg>
        </div>
      </button>
      {isDropdownOpen ? (
        <div className="absolute left-[-1px] top-[100%] z-[100] w-[calc(100%_+_2px)] overflow-hidden rounded-[22px] rounded-t-none border border-t-0 border-black bg-white pr-6">
          <ul className="menu pointer-events-auto  max-h-[150px] w-full  overflow-y-auto overflow-y-scroll  bg-white p-6 pt-0 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#9a9999] scrollbar-track-rounded-full scrollbar-thumb-rounded-full xl:pr-10">
            {options?.length > 0 &&
              options.map((option, index) => (
                <li key={index} className="group/item  pointer-events-auto border-b border-[#dfdddd] bg-white last-of-type:border-none">
                  <a
                    href={option.url}
                    className="group flex h-full items-center  py-4 font-roboto text-lg font-light text-gray-900 group-first-of-type/item:pt-0 hover:text-[var(--primary-color)]"
                  >
                    <svg
                      className="hidden fill-[var(--primary-color)] group-hover:block"
                      height={10}
                      width={10}
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 330 330"
                      xmlSpace="preserve"
                    >
                      <path d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z" />
                    </svg>
                    <span className="transition-all duration-300 group-hover:pl-3">{option.text}</span>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default FundDropdown;
