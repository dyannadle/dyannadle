import React, { useState, useCallback } from 'react';

// Define the array of image paths. These should be absolute public URLs.
const images: string[] = [
  '/images/logo-state-1.png',
  '/images/logo-state-2.png',
];

const LogoCycler: React.FC = () => {
  // State to track the index of the current image, starting at 0.
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Use useCallback to memoize the click handler, improving performance.
  const handleClick = useCallback(() => {
    // Calculate the next index: (current index + 1) modulus total number of images.
    // This creates the repeating cycle (e.g., 2 + 1 = 3; 3 % 3 = 0, wrapping back to the start).
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  return (
    <img
      // Use the current index to select the image source from the array
      src={images[currentImageIndex]}
      // Provide a descriptive alt text for accessibility
      alt={`Interactive Logo State ${currentImageIndex + 1}`}
      onClick={handleClick}
      // Add a style to indicate the element is clickable
      style={{ cursor: 'pointer', maxWidth: '100px' }} 
    />
  );
};

export default LogoCycler;