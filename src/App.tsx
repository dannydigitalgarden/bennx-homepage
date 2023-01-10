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
import { Intersection } from "@splidejs/splide-extension-intersection";
// import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";

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

  const [currentActiveSlide, setCurrentActiveSlide] = useState(0);

  const slideRef = useRef<Splide>(null);
  const slideOptions = {
    direction: "ttb",
    wheel: true,
    releaseWheel: true,
    waitForTransition: true,
    wheelSleep: 100,
    speed: 1000,
    width: "100vw",
    height: "100vh",
    arrows: false,
    mediaQuery: "max",
    breakpoints: {
      768: {
        destroy: true,
      },
    },
  } as const;

  const { x, y } = useWindowScroll();

  const [enabledWheel, setEnabledWheel] = useState(true);

  return (
    <div className="App">
      <Splide ref={slideRef} hasTrack={false} aria-label="my slider" options={slideOptions} extensions={{ Intersection }}>
        <SplideTrack>
          <SplideSlide>
            <BannerImageFloatingWithButton />
          </SplideSlide>
          <SplideSlide>
            <BannerImageFloatingWithDropdown />
          </SplideSlide>
          <SplideSlide>
            <BannerImageFull setIsModalActive={setIsModalActive} />
          </SplideSlide>
          <SplideSlide>
            <CardGrid />
          </SplideSlide>
        </SplideTrack>
      </Splide>

      <LatestInsights {...latestInsights} />
      <Subscribe {...subscribe} />

      {!isTabletOrMobile && (
        <div className="fixed bottom-2 left-1/2 z-10 w-full translate-x-[-50%]">
          <IconTextListing />
        </div>
      )}
      {isModalActive && <ModalVideo setIsModalActive={setIsModalActive} />}
    </div>
  );
}

export default App;
