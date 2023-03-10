import React from "react";
import cx from "classnames";
import woman from "assets/images/woman.png";
import IconTextListing from "components/IconTextListing";
import bannerBackgroundMobile from "assets/images/banner-background-mobile-1.svg";

import { useMediaQuery } from "react-responsive";
import Button from "components/Button";

const BannerImageFloatingWithButton = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div className="relative w-full overflow-hidden md:h-screen">
      <div className={cx({ "p-horizontal": !isTabletOrMobile }, "h-full w-full")}>
        <div className="mx-auto h-full max-w-[1440px]">
          <div className="flex h-full flex-col items-start justify-center md:flex-row-reverse md:items-center">
            <div className="relative z-[2] aspect-[375/180] w-full overflow-hidden md:aspect-auto md:w-1/2">
              {isTabletOrMobile && (
                <div className="absolute top-0 left-0  z-0  h-full w-full">
                  <img src={bannerBackgroundMobile} className="h-full w-full" alt="bg" />
                </div>
              )}
              <img src={woman} className="relative z-[2] mx-auto h-auto w-[50%] object-cover md:w-auto md:object-contain" />
            </div>

            <div className="relative z-[5] w-full md:absolute md:bottom-6">
              <IconTextListing />
            </div>

            <div className={cx({ "p-horizontal": isTabletOrMobile }, "relative z-[2] mt-12 mb-20 flex-1 md:mr-4 md:mt-0 md:mb-0 lg:mr-24")}>
              <div className="max-w-xl text-gray-900">
                <div className="heading-xl">Partners of high performance</div>
                <div className="my-6 font-roboto text-lg font-light">
                  Partnering with high performance boutiques to deliver exceptional outcomes for our investors across the globe.
                </div>

                <Button url="#" text="View more" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerImageFloatingWithButton;
