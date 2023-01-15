import React from "react";

export interface InsightProps {
  url: string;
  image: string;
  title: string;
  intro: string;
  tags: Array<string>;
}

const InsightCard: React.FC<InsightProps> = ({ url, image, title, intro, tags }) => {
  return (
    <a className="insight-card group" aria-label={title} href={url}>
      <div className="aspect-[450/320] overflow-hidden">
        <img src={image} alt={title} width="450px" height="320px" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
      </div>
      <div className="flex flex-wrap items-center gap-2 pt-6">
        {tags?.length > 0 &&
          tags.map((tag, index) => (
            <div
              className="before:contents-[''] flex items-center gap-x-2 font-roboto text-sm font-medium font-medium text-sky-900 before:block before:h-1 before:w-1 before:rounded-full before:bg-sky-900 first-of-type:before:hidden"
              key={index}
            >
              {tag}
            </div>
          ))}
      </div>
      <div className="mb-2 mt-4 font-roboto text-xl font-medium leading-tight  text-gray-900 group-hover:text-[var(--primary-color)]">{title}</div>
      <div className=" mt-2 font-roboto text-lg font-light text-gray-900">{intro}</div>
    </a>
  );
};

export default InsightCard;
