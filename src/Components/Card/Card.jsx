import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const cardData = [
  {
    imageUrl: 'https://i.pinimg.com/736x/67/f8/50/67f85072ec623995f7667c1caea2a237.jpg',
    title: 'Card 1',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/a1/a0/b4/a1a0b46f7f9652a06f21ae0a3ea52e28.jpg',
    title: 'Card 2',
    text: 'Another example text for the second card.',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/70/55/4e/70554e6f17efbbed771fa156d7e0e3aa.jpg',
    title: 'Card 3',
    text: 'And one more for the third card.',
  }
];

export default function CardGrid({ title }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
          <div 
            key={index} 
            className="relative block w-full h-[400px] rounded-lg overflow-hidden bg-slate-200 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white transition-transform transform hover:scale-105"
          >
            <div className="relative overflow-hidden h-full">
              <img src={card.imageUrl} alt="Card" className="block absolute inset-0 w-full h-full object-cover" />
              <div 
        className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-center p-4 h-10 transition-all duration-300 ease-in-out hover:h-20"
      >

                <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                <p className="text-sm">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
