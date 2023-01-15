import React, { useEffect, useRef, MutableRefObject } from "react";
import Container from "components/Container";
import Button from "components/Button";
import InsightCard from "components/InsightCard";
import { InsightProps } from "components/InsightCard/InsightCard";
import { textReveal } from "utils/animation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface LatestInsightsProps {
  title: string;
  items: Array<InsightProps>;
  button: any;
}

const LatestInsights: React.FC<LatestInsightsProps> = ({ title, items, button }) => {
  const headingRef = useRef() as MutableRefObject<HTMLDivElement>;
  const mediaRef = useRef() as MutableRefObject<HTMLDivElement>;
  const buttonRef = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = gsap.utils.toArray(".insight-card");

    const scrollOptions = {
      trigger: ".latest-insights",
      start: "top 80%",
      end: "+=50%",
      scrub: 1.25,
      toggleActions: "play none none none",
    };

    if (headingRef.current && buttonRef.current) {
      setTimeout(() => {
        textReveal(headingRef.current, headingRef.current, undefined, buttonRef.current, 0);
      }, 1000);

      gsap.set(headingRef.current, { y: 30 });

      gsap.to(headingRef.current, {
        y: -10,
        ease: "none",
        scrollTrigger: scrollOptions,
      });
    }

    if (cards?.length > 0 && mediaRef.current) {
      gsap.fromTo(
        cards,
        {
          y: 40,
          opacity: 0,
        },
        {
          scrollTrigger: { trigger: mediaRef.current, start: "top 80%", scrub: false, toggleActions: "play none none reverse" },
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.2,
        }
      );
    }
  }, []);

  return (
    <div className="latest-insights p-horizontal pt-16 pb-10 xl:py-36">
      <Container>
        <div className="mb-12 flex flex-col items-start  md:flex-row md:items-center md:justify-between">
          <div className="heading-xl mb-5 text-4xl text-gray-900 md:mb-0" ref={headingRef}>
            {title}
          </div>
          <div ref={buttonRef}>
            <Button {...button} />
          </div>
        </div>
        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-4 xl:gap-10 " ref={mediaRef}>
          {items?.length > 0 && items.map((item, index) => <InsightCard key={index} {...item} />)}
        </div>
      </Container>
    </div>
  );
};

export default LatestInsights;
