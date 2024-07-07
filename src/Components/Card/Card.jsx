import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import FootballHistoryCard from '../History Page/History';

const cardData = [
  {
    imageUrl: 'https://i.pinimg.com/736x/67/f8/50/67f85072ec623995f7667c1caea2a237.jpg',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/a1/a0/b4/a1a0b46f7f9652a06f21ae0a3ea52e28.jpg',
    text: 'Another example text for the second card.',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/70/55/4e/70554e6f17efbbed771fa156d7e0e3aa.jpg',
    text: 'And one more for the third card.',
  }
];

const cardContent = {
  imageUrl: "https://i.pinimg.com/736x/59/a7/78/59a778d53fbefe383abab0dc898421d2.jpg",
  title: "ប្រវិត្តនៃ កីឡារបាល់ទាត់",
  paragraphs: [
    "Example paragraph 1",
    "Example paragraph 2",
    "Example paragraph 3",
    "Example paragraph 4",
    "Example paragraph 5",
  ],
};

export default function CardGrid({ title }) {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
    document.body.style.backgroundColor = '#f0f0f0';
  };

  const handleCloseCard = () => {
    setSelectedCardIndex(null);
    document.body.style.backgroundColor = '';
  };

  if (isLoading) {
    return (
      <div className='w-full -mt-96'>
        <h4 className="text-xl sm:text-3xl md:text-6xl font-bold pt-96 px-11 pb-14 animate-pulse text-center">
          Loading...
        </h4>
        <div className="w-9/12 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-16">
          {cardData.map((card, index) => (
            <div key={index} className="block max-w-sm rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white animate-pulse">
              <div className="relative overflow-hidden bg-gray-300 rounded-t-lg" style={{ paddingBottom: '66.6667%' }}>
                <Skeleton height="100%" />
              </div>
              <div className="p-6">
                <Skeleton count={3} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='w-full -mt-80'>
      <h4 className="text-xl sm:text-3xl md:text-6xl font-bold pt-96 px-11 pb- text-center">
        {title || 'Default Title'}
      </h4>
      <div className="w-9/12 m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-16">
        {cardData.map((card, index) => (
          <button 
            onClick={() => handleCardClick(index)} 
            key={index} 
            className={`block max-w-sm rounded-lg bg-slate-200 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white ${selectedCardIndex === index ? 'bg-blue-200' : ''}`}
          >
            <div 
              className="relative overflow-hidden bg-cover bg-no-repeat rounded-t-lg" 
              style={{ paddingBottom: '66.6667%', backgroundImage: `url(${card.imageUrl})` }}
            ></div>
            <div className="p-6">
              <p className="text-base">{card.text}</p>
            </div>
          </button>
        ))}
      </div>
      {selectedCardIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center  justify-center z-50">
          <div className="  rounded-lg w-4/5  h-5/6 overflow-auto">
           
            <FootballHistoryCard {...cardContent} onClose={handleCloseCard}  />
          </div>
        </div>
      )}
    </div>
  );
}
