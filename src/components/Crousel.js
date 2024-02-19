"use client";
import { useEffect, useRef, useState } from "react";
import CrouselCard from "./CrouselCard";
import { Carousel } from "flowbite-react";

export default function Crousel() {
  const [show, setShow] = useState(0);
  const el = [
    {
      image: "slider-5.png",
      content:
        "Discover Your Sole Story: Elevate your style and step into the extraordinary with our innovative footwear. Unleash your creativity from the ground up – Welcome to WalkWonders, where every shoe is a canvas for your unique journey.",
      title: "WalkWonders",
    },
    {
      image: "slider-6.png",
      title: "Walk Into The World Of Comfort",
      content:
        "Step into a world of comfort and style with our exceptional shoes, where every stride becomes a journey and every path a runway.",
    },
  ];

  return (
    <div className="h-max">
      <Carousel rightControl=">" leftControl="<" indicators={false}>
        {el.map((item, indx) => {
          return (
            <CrouselCard
              img={item.image}
              title={item.title}
              content={item.content}
              key={indx}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
