import { useRef, useEffect, useState, MutableRefObject } from "react";
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

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
    url: "/insights",
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
  gsap.registerPlugin(ScrollTrigger);
  const [isModalActive, setIsModalActive] = useState(false);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slideRef = useRef<Splide>(null);

  const circleOneRef = useRef() as MutableRefObject<HTMLDivElement>;
  const circleTwoRef = useRef() as MutableRefObject<HTMLDivElement>;
  const circleThreeRef = useRef() as MutableRefObject<HTMLDivElement>;

  const insightsCircleRef = useRef() as MutableRefObject<HTMLDivElement>;

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

  useEffect(() => {
    if (insightsCircleRef.current) {
      gsap.fromTo(
        insightsCircleRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".insights-subscribe",
            start: "top 70%",
            end: "+=50%",
            scrub: 1.2,
            toggleActions: "play none none none",
          },
          scale: 1,
          opacity: 0.1,
        }
      );
    }
  }, []);

  useEffect(() => {
    if (activeSlideIndex != 0) {
      if (circleOneRef.current) {
        gsap.to(circleOneRef.current, {
          yPercent: -10,
          duration: 2.5,
        });
      }

      if (circleTwoRef.current) {
        gsap.to(circleTwoRef.current, {
          opacity: 0.2,
          duration: 2,
          y: -120,
        });
      }

      if (circleThreeRef.current) {
        gsap.to(circleThreeRef.current, {
          opacity: 0.2,
          y: 50,
          duration: 2,
        });
      }
    } else {
      gsap.to(circleOneRef.current, {
        yPercent: 0,
        duration: 2,
      });

      gsap.to(circleTwoRef.current, {
        opacity: 0.7,
        y: -10,
        duration: 2,
      });

      gsap.to(circleThreeRef.current, {
        opacity: 0.8,
        y: 0,
        duration: 2,
      });
    }
  }, [activeSlideIndex]);
  return (
    <div className="App">
      {!isTabletOrMobile && (
        <div className="banners-desktop relative overflow-hidden">
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
                <div ref={circleOneRef} className="circle-1"></div>
                <div ref={circleTwoRef} className="circle-2"></div>
                <div ref={circleThreeRef} className="circle-3"></div>
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
        <div className="banners-mobile">
          <BannerImageFloatingWithButton />
          <BannerImageFloatingWithDropdown />
          <BannerImageFull setIsModalActive={setIsModalActive} />
          {/* <CardGrid /> */}
        </div>
      )}
      <div className="insights-subscribe relative overflow-hidden">
        <div
          ref={insightsCircleRef}
          className="absolute right-[-900px] top-[-400px] z-0 hidden aspect-square w-[1550px] rounded-full bg-[#ccc] opacity-20 xl:block 2xl:top-[-400px] 2xl:right-[-650px]"
        ></div>
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
