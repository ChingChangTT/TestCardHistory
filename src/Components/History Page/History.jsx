import React, { useState, useEffect } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import { GiBeachBall } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
const AdvertisementCard = ({ imageUrl, title }) => (
  <motion.div
    className="bg-blue-500 text-white p-4 rounded-lg shadow-md m-4"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <img
      src={imageUrl}
      alt="Advertisement"
      className="rounded-lg object-cover h-32 w-full"
    />
    <h3 className="mt-2 text-lg font-semibold">{title}</h3>
  </motion.div>
);


const FootballHistoryCard = ({ imageUrl, onClose, title, paragraphs }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const adCards = [
    {
      imageUrl: "https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/448578819_472648068849032_8598525572414855019_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHf8ySB_DaIXg8nfbgzxLhy8qFGmXHsOnPyoUaZcew6c3ZISd5sfBzPlJr0Nl5oG9iGbqczQvhBvlDjYtY3Xg1m&_nc_ohc=otXWZ_rY7aYQ7kNvgEm0Oo2&_nc_ht=scontent.fpnh10-1.fna&oh=00_AYCIn7-kSRPdAIFMTsytc3zypdfCVWGoGa5TI2jGpuvkKw&oe=669265ED",
      title: " ទំនាក់ទំនងចុះឈ្មោះ៖ 093 990 910 / 095 990 910 ឬ www.istad.co/enrollOfficial CSTAD Telegram Channel: https://t.me/istadckh ",
    },
    {
      imageUrl: "https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/349114307_778194550548785_3597690062730098750_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHwlj_Qz8sWBigCeRBPEVRJVBh3yjxXCT5UGHfKPFcJPklldh1P6fJ8q-jtRPmxWFpUTw5WdDDfoogFZsKp7e3w&_nc_ohc=qPbGq_rNUTgQ7kNvgELnQvt&_nc_ht=scontent.fpnh10-1.fna&oh=00_AYBTjXPs5x3mTgLmnWg6lUpp4Zb5ngBbU7GPWxlnsB5qbQ&oe=66927017",
      title: "ព័ត៌មានលម្អិតអំពីវគ្គសិក្សា៖ https://istad.co/.../60ae0e6b-64a5-4fbe-bfc6-c0a908924bcb",
    },
    {
      imageUrl: "https://scontent.fpnh10-1.fna.fbcdn.net/v/t39.30808-6/433504669_410298271750679_2587491559128755298_n.jpg?stp=dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE2bc2TOWaAYyh0JuCRvLABe-eyjbnV6i5757KNudXqLjjA1vVdOm3dIgdMacRwMNBj6XzxUaGOOKWwrxAI6gtD&_nc_ohc=cgmG7vRXlpsQ7kNvgFV2_vp&_nc_ht=scontent.fpnh10-1.fna&oh=00_AYB1SBhPOHXFlEe3ZzFmrJ45QJycNklur80p5Bt7RmZmYw&oe=669284E8",
      title: " វគ្គសិក្សារចនាគេហទំព័រ ថ្នាក់ថ្មី ជិតដល់ថ្ងៃចូលរៀនហើយ!! បន្ទាប់ពីរៀនចប់ និស្សិតអាចធ្វើជា៖១) UX and UI Designer២) Frontend Web Developer",
    }
  ];

  return (
    <div className="w-full sm:w-11/12 lg:w-full mx-auto rounded-lg shadow-lg">
  <div className="flex flex-col items-start px-4 sm:px-10 py-6">
    <div className="w-full sm:w-4/5 mx-auto flex items-start justify-between px-4 sm:px-10 py-6">
      {isLoading ? (
        <Skeleton circle={true} height={48} width={48} />
      ) : (
        <button onClick={() => navigate('/')} className="your-button-class">
        <RiArrowGoBackFill className="text-3xl sm:text-5xl mb-4 sm:mb-0" />
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
        <GiBeachBall className="text-3xl sm:text-5xl mb-4 sm:mb-0" />
      )}
    </div>

    <div className="my-4 w-full sm:w-4/5 mx-auto px-4 sm:px-6 lg:px-8">
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

    <div className="w-full sm:w-4/5 mx-auto flex flex-col sm:flex-row justify-between items-start mt-4">
      <div className="w-full sm:w-1/2 leading-relaxed px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold pb-7">
          {title || "Default Title"}
        </h2>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-4 text-base sm:text-lg md:text-xl">
            {paragraph || "Default paragraph"}
          </p>
        ))}
      </div>
      <div className="w-full sm:w-1/2 flex flex-wrap justify-center gap-5">
        {adCards.map((adCard, index) => (
          <AdvertisementCard
            key={index}
            imageUrl={adCard.imageUrl}
            title={adCard.title}
          />
        ))}
      </div>
    </div>
  </div>
  
</div>

  );
};

export default FootballHistoryCard;
