import { useRef, useEffect, useState, MutableRefObject } from "react";
import BannerImageFloatingWithButton from "components/Banners/BannerImageFloatingWithButton";
import BannerImageFloatingWithDropdown from "components/Banners/BannerImageFloatingWithDropdown";
import BannerImageFull from "components/Banners/BannerImageFull";
import CardGrid from "components/CardGrid";
import LatestInsights from "components/LatestInsights/LatestInsights";

import { useMediaQuery } from "react-responsive";

import "./App.css";

import Subscribe from "components/Subscribe";

import { useWindowScroll } from "react-use";
import ModalVideo from "components/ModalVideo";
import IconTextListing from "components/IconTextListing";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const [mySwiper, setMySwiper] = useState<any>(null);

  const circleOneRef = useRef() as MutableRefObject<HTMLDivElement>;
  const circleTwoRef = useRef() as MutableRefObject<HTMLDivElement>;
  const circleThreeRef = useRef() as MutableRefObject<HTMLDivElement>;

  const insightsCircleRef = useRef() as MutableRefObject<HTMLDivElement>;

  const { y } = useWindowScroll();

  useEffect(() => {
    if (isTabletOrMobile) {
      setMySwiper(null);
    }
  }, [isTabletOrMobile]);

  useEffect(() => {
    if (!mySwiper) return;

    if (y > 0 && mySwiper.isEnd) {
      mySwiper.mousewheel.disable();
    } else {
      mySwiper.mousewheel.enable();
    }
  }, [y]);

  useEffect(() => {
    if (insightsCircleRef.current) {
      gsap.fromTo(
        insightsCircleRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".insights-subscribe",
            start: "top 70%",
            end: "+=50%",
            scrub: 1,
            toggleActions: "play none none none",
          },
          scale: 1,
          opacity: 0.1,
        }
      );
    }
  }, []);

  useEffect(() => {
    if (circleOneRef.current) {
      gsap.to(circleOneRef.current, {
        yPercent: -activeSlideIndex * 75,
        duration: 0.7,
      });
    }

    if (circleTwoRef.current) {
      gsap.to(circleTwoRef.current, {
        opacity: activeSlideIndex == 0 ? 0.75 : 0.2,
        duration: 0.9,
        yPercent: -activeSlideIndex * 45,
        zIndex: activeSlideIndex == 2 ? 2 : 0,
      });
    }

    if (circleThreeRef.current) {
      gsap.to(circleThreeRef.current, {
        opacity: 0.5,
        yPercent: -activeSlideIndex * 75,
        duration: 1.5,
      });
    }
  }, [activeSlideIndex]);

  useEffect(() => {
    if (isModalActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalActive]);

  useEffect(() => {
    if (!mySwiper) return;
    if (isDropdownOpen) {
      document.body.style.overflow = "hidden";
      mySwiper.disable();
    } else {
      mySwiper.enable();
      document.body.style.overflow = "auto";
    }
  }, [isDropdownOpen]);

  return (
    <div className="App">
      {!isTabletOrMobile && (
        <div className="banners-desktop relative overflow-hidden">
          <div className="circles pointer-events-none">
            <div ref={circleOneRef} className="circle-1"></div>
            <div ref={circleTwoRef} className="circle-2"></div>
            <div ref={circleThreeRef} className="circle-3"></div>
          </div>

          <Swiper
            direction={"vertical"}
            speed={800}
            slidesPerView={1}
            allowTouchMove={false}
            mousewheel={{
              releaseOnEdges: true,
              forceToAxis: true,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
            onSwiper={(swiper) => {
              setMySwiper(swiper);
            }}
            onBeforeTransitionStart={(swiper) => {
              setActiveSlideIndex(swiper.activeIndex);
              console.log(swiper);
            }}
          >
            <SwiperSlide>
              <BannerImageFloatingWithButton />
            </SwiperSlide>
            <SwiperSlide>
              <BannerImageFloatingWithDropdown isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} />
            </SwiperSlide>
            <SwiperSlide>
              <BannerImageFull setIsModalActive={setIsModalActive} />
            </SwiperSlide>
          </Swiper>
          {/* 
          {!isTabletOrMobile && activeSlideIndex <= 1 && (
            <div className="z-[5] w-full md:absolute md:bottom-4">
              <IconTextListing />
            </div>
          )} */}
        </div>
      )}

      {isTabletOrMobile && (
        <div className="banners-mobile">
          <BannerImageFloatingWithButton />
          <BannerImageFloatingWithDropdown isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} />
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
