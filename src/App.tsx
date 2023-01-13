import { useRef, useEffect, useState } from "react";
import BannerImageFloatingWithButton from "components/Banners/BannerImageFloatingWithButton";
import BannerImageFloatingWithDropdown from "components/Banners/BannerImageFloatingWithDropdown";
import BannerImageFull from "components/Banners/BannerImageFull";
import CardGrid from "components/CardGrid";
import LatestInsights from "components/LatestInsights/LatestInsights";

import { useMediaQuery } from "react-responsive";

import "./App.css";

import Subscribe from "components/Subscribe";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { useWindowScroll } from "react-use";
import ModalVideo from "components/ModalVideo";
import IconTextListing from "components/IconTextListing";

const latestInsights = {
  title: "Latest Insights",
  items: [
    {
      url: "#",
      title: "Investment Perspectives: Don’t fear the taper",
      image: "https://images.pexels.com/photos/14392059/pexels-photo-14392059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      intro:
        "As vaccination rates increase around the world and we (hopefully) return to some normality in our daily lives, world economies appear to be stabilising.",
      tags: ["Quay Global Investors", "Article", "1 min read"],
    },
    {
      url: "#",
      title: "Investment Perspectives: Don’t fear the taper",
      image: "https://images.pexels.com/photos/14392059/pexels-photo-14392059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      intro:
        "As vaccination rates increase around the world and we (hopefully) return to some normality in our daily lives, world economies appear to be stabilising.",
      tags: ["Quay Global Investors", "Article", "1 min read"],
    },
    {
      url: "#",
      title: "Investment Perspectives: Don’t fear the taper",
      image: "https://images.pexels.com/photos/14392059/pexels-photo-14392059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      intro:
        "As vaccination rates increase around the world and we (hopefully) return to some normality in our daily lives, world economies appear to be stabilising.",
      tags: ["Quay Global Investors", "Article", "1 min read"],
    },
  ],
  button: {
    text: "View more",
    background: "#a2041c",
    color: "light",
    url: "#",
  },
};

const subscribe = {
  title: "Stay up to date",
  intro: "Get the latest performance reports, articles, podcasts & company news.",
  color: "light",
  button: {
    text: "Subscribe",
    url: "#",
  },
};

function App() {
  const [isModalActive, setIsModalActive] = useState(false);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slideRef = useRef<Splide>(null);

  const slideOptions = {
    type: "slide",
    updateOnMove: true,
    direction: "ttb",
    wheel: true,
    releaseWheel: true,
    waitForTransition: true,
    wheelSleep: 200,
    speed: 1000,
    width: "100vw",
    height: "100vh",
    arrows: false,
  } as const;

  const { y } = useWindowScroll();

  useEffect(() => {
    if (isTabletOrMobile) return;

    const track = document.querySelector(".splide__track") as HTMLDivElement;
    if (!track && slideRef.current) return;

    if (y > 0 && slideRef.current?.splide && slideRef.current.splide.index + 1 == slideRef.current?.splide?.length) {
      track.style.pointerEvents = "none";
    } else {
      track.style.pointerEvents = "auto";
    }
  }, [y, isTabletOrMobile]);

  return (
    <div className="App">
      {!isTabletOrMobile && (
        <div className="relative overflow-hidden">
          <Splide
            ref={slideRef}
            hasTrack={false}
            aria-label="my slider"
            options={slideOptions}
            onMove={(splide, index) => {
              setActiveSlideIndex(index);
              console.log(index);
            }}
          >
            <SplideTrack>
              <div className="circles">
                <div className=" circle-1"></div>
                <div className=" circle-2"></div>
                <div className=" circle-3"></div>
              </div>
              <SplideSlide>
                <BannerImageFloatingWithButton />
              </SplideSlide>
              <SplideSlide>
                <BannerImageFloatingWithDropdown />
              </SplideSlide>
              <SplideSlide>
                <BannerImageFull setIsModalActive={setIsModalActive} />
              </SplideSlide>
              {/* <SplideSlide>
                <CardGrid />
              </SplideSlide> */}
            </SplideTrack>
          </Splide>

          {!isTabletOrMobile && activeSlideIndex <= 1 && (
            <div className="z-[5] w-full md:absolute md:bottom-4">
              <IconTextListing />
            </div>
          )}
        </div>
      )}

      {isTabletOrMobile && (
        <div>
          <BannerImageFloatingWithButton />
          <BannerImageFloatingWithDropdown />
          <BannerImageFull setIsModalActive={setIsModalActive} />
          <CardGrid />
        </div>
      )}
      <div className="relative overflow-hidden">
        <div className="absolute right-[-900px] top-[-400px] z-0 hidden aspect-square w-[1550px] rounded-full bg-[#ccc] opacity-10 xl:block 2xl:top-[-400px] 2xl:right-[-650px]"></div>
        <div className="relative z-10">
          <LatestInsights {...latestInsights} />
        </div>
        <Subscribe {...subscribe} />
      </div>

      {isModalActive && <ModalVideo setIsModalActive={setIsModalActive} />}
    </div>
  );
}

export default App;
