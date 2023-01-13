import React from "react";
import cx from "classnames";
import bannerBackgroundMobile from "assets/images/banner-background-mobile-2.svg";
import astronaut from "assets/images/astronaut.png";

import { useMediaQuery } from "react-responsive";
import IconTextListing from "components/IconTextListing";

const BannerImageFloatingWithDropdown = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className="relative w-full overflow-hidden  md:h-screen">
      <div className={cx({ "p-horizontal": !isTabletOrMobile }, "h-full w-full")}>
        <div className="mx-auto h-full max-w-[1440px]">
          <div className="flex h-full flex-col items-start justify-center md:flex-row-reverse md:items-center">
            <div className="relative z-[2] aspect-[375/200] w-full overflow-hidden md:aspect-auto md:w-1/2">
              {isTabletOrMobile && (
                <div className="absolute top-0 left-0  z-0  h-full w-full">
                  <img src={bannerBackgroundMobile} className="h-full w-full" alt="bg" />
                </div>
              )}
              <img src={astronaut} className="relative z-[1] mx-auto h-full w-[75%] object-cover md:h-auto md:w-auto md:object-contain" />
            </div>

            <div className={cx({ "p-horizontal": isTabletOrMobile }, "relative z-[2] mt-20 mb-20 flex-1 md:mr-24 md:mt-0 md:mb-0")}>
              <div className="max-w-xl text-gray-900">
                <div className="heading-xl">Welcome to Bennelong</div>
                <div className="my-6 font-roboto text-lg font-light">
                  We develop and distribute actively managed equity funds across the globe, offering high-grade service and investment solutions to
                  institutions, financial advisers and direct investors. People invest in our funds; our boutique partners manage the money; and we manage the
                  business to deliver the best possible outcomes for our clients.
                </div>
                <div>Drop down</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerImageFloatingWithDropdown;
