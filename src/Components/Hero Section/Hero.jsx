import React, { useState, useEffect } from 'react';
import '../../index.css'; // Import the Tailwind CSS file

export default function HeroSection({ imageUrl, title }) {
  const [isLoading, setIsLoading] = useState(true);
  const placeholderImageUrl = "https://i.pinimg.com/564x/3c/7a/9f/3c7a9fe74d3e96e9d130fe46b7e81426.jpg"; 

  useEffect(() => {
    // Simulate a delay in loading the content
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay as needed
  }, []);

  if (isLoading) {
    return (
      <section
        className="w-full relative max-h-fit bg-no-repeat bg-center p-4 mb-16 bg-cover animate-pulse"
        style={{
          backgroundImage: `url(${placeholderImageUrl})`,
        }}
      >
        {/* Skeleton for the title */}
        <h4 className="text-xl sm:text-3xl md:text-6xl font-bold pt-96 px-11 pb-14 animate-pulse">
          Loading...
        </h4>
      </section>
    );
  }

  return (
    <section
      className="w-full relative max-h-fit bg-cover bg-center mb-14 animate-fade"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h4 className="text-xl sm:text-3xl md:text-6xl font-bold pt-96 px-11 pb-14">
        {title || 'Default Title'}
      </h4>
    </section>
  );
}
