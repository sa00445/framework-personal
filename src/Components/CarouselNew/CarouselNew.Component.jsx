import React from 'react';
import { useStep } from 'react-hooks-helper';

import Navigation from './Navigation';
import Progress from './Progress';

const CarouselNew = ({ initialStep, images }) => {
  const { step, navigation, index, isPaused, autoAdvanceDuration } = useStep({
    initialStep,
    autoAdvanceDuration: 5000,
    steps: images,
  });
  const { description = '', src, alt = '' } = step;

  return (
    <div className="carousel">
      <img alt={alt} src={src} />
      <Navigation
        isPaused={isPaused}
        index={index}
        count={images.length}
        {...navigation}
      />
      {!isPaused && <Progress step={index} duration={autoAdvanceDuration} />}
    </div>
  );
};

export default CarouselNew;