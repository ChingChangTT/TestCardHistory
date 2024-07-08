import React, { useState, useEffect } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Card } from "flowbite-react";

const SkeletonText = ({ height, width, count }) => (
  <>
    <Skeleton height={height} width={width} />
    {Array.from({ length: count }).map((_, index) => (
      <Skeleton key={index} height={24} style={{ marginTop: 8 }} />
    ))}
  </>
);

const FootballHistoryCard = ({ imageUrl, onClose, title, paragraphs }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
   
  };

  return (
    <div className="w-full sm:w-11/12 lg:w-9/12 mx-auto bg-pink-100 rounded-lg shadow-lg">
      <div className="max-w-screen-lg mx-auto flex sm:flex-row items-center justify-between px-4 sm:px-10 py-6">
        {isLoading ? (
          <Skeleton circle={true} height={48} width={48} />
        ) : (
          <button onClick={onClose}>
            <RiArrowGoBackFill
              onClick={handleClick}
              className="text-3xl sm:text-5xl mb-4 sm:mb-0"
            />
          </button>
        )}
        <h1 className="text-center font-bold text-3xl sm:text-3xl md:text-4xl lg:text-6xl mb-4 sm:mb-0">
          {isLoading ? (
            <Skeleton width={300} height={40} />
          ) : (
            title || "Default Title"
          )}
        </h1>
        {isLoading ? (
          <Skeleton circle={true} height={48} width={48} />
        ) : (
          <AiOutlineArrowsAlt className="text-3xl sm:text-5xl mb-4 sm:mb-0" />
        )}
      </div>

      <div className="my-4 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <Skeleton height={288} />
        ) : (
          <img
            src={imageUrl}
            alt="Historical Football Match"
            className="w-full rounded-lg object-cover max-h-72 sm:max-h-96"
          />
        )}
      </div>

      <div className="leading-relaxed px-4 sm:px-6 lg:px-8 py-6">
        {isLoading ? (
          <SkeletonText height={32} width={200} count={paragraphs.length} />
        ) : (
          <>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold pb-7">
              {title || "Default Title"}
            </h2>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-4 text-base sm:text-lg md:text-xl">
                {paragraph || "Default paragraph"}
              </p>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FootballHistoryCard;
