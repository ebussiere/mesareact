import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './Projects.css';
import '../../App.css';

const items = [
  {
    src: "../assets/img/projects/inglewood/IMG_2812.jpg",
    altText: 'Inglewood Gym',
    caption: 'Inglewood Gym',
    caption2: 'Description of image'
  },
  {
    src: "../assets/img/projects/inglewood/IMG_2813.jpg",
    altText: 'Inglewood Gym',
    caption: 'Inglewood Gym',
    caption2: 'Description of image'
  },
  {
    src: "../assets/img/projects/inglewood/IMG_2814.jpg",
    altText: 'Inglewood Gym',
    caption: 'Inglewood Gym',
    caption2: 'Description of image'
  },
  {
    src: "../assets/img/projects/inglewood/IMG_2815.jpg",
    altText: 'Inglewood Gym',
    caption: 'Inglewood Gym',
    caption2: 'Description of image'
  },
  {
    src: "../assets/img/projects/inglewood/IMG_2816.jpg",
    altText: 'Inglewood Gym',
    caption: 'Inglewood Gym',
    caption2: 'Description of image'
  },
  {
    src: "../assets/img/projects/inglewood/IMG_2817.jpg",
    altText: 'Inglewood Gym',
    caption: 'Inglewood Gym',
    caption2: 'Description of image'
  }
];

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption2} captionHeader={item.caption} />
      </CarouselItem>
    );
  });



  return (
    <section id="projects" className="d-flex">
      <div className="container-fluid m-2">
        <h5 className="text-arch">Projects</h5>
        <div>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            dark
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </div>
      </div>

    </section>
  );
}
export default Projects;