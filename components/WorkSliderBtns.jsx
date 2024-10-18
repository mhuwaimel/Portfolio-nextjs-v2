"use client";

import { useSwiper } from "swiper/react";

import ChevronLeftIcon from "./ui/ChevronLeftIcon";
import ChevronRightIcon from "./ui/ChevronRightIcon";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <ChevronRightIcon
          className={iconsStyles}
          textAnchor="السابق"
          onClick={() => swiper.slidePrev()}
        />
      </button>
      <button className={btnStyles}>
        <ChevronLeftIcon
          textAnchor="التالي"
          className={iconsStyles}
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
