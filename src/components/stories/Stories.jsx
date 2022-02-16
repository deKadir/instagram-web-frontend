import React from "react";
import style from "./stories.module.scss";
import Story from "components/story";
import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { CareouselIconLeft, CarouselIconRight } from "assets/icons";
export default function Stories() {
  return (
    <div className={style.stories}>
      <Carousel
        plugins={[
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 7.5,
            },
          },
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: <CareouselIconLeft />,

              arrowRight: <CarouselIconRight />,
              arrowLeftDisabled: <div></div>,
              arrowRightDisabled: <div></div>,
              addArrowClickHandler: true,
            },
          },
        ]}
      >
        <Story width="51px" />
        <Story width="51px" />
        <Story width="51px" />
        <Story width="51px" />
        <Story width="51px" />
        <Story width="51px" />
        <Story width="51px" />
        <Story width="51px" />
        <Story width="51px" />
      </Carousel>
    </div>
  );
}
