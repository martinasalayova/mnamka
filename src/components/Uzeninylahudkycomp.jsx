import React from "react";
import "../Styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Uzeninylahudkycomp() {
  return (
    <div>
      <Splide
        options={{
          perPage: 2,
          fixedWidth: false,
          height: 350,
          gap: "15px",
          drag: true,
        }}
      >
        <SplideSlide>
          <div>
            <img src="/fotky/boruvecky.jpg" alt="Banana" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/banany.avif" alt="Apple" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/boruvecky.jpg" alt="Banana" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/banany.avif" alt="Apple" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/boruvecky.jpg" alt="Banana" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/banany.avif" alt="Apple" />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}
