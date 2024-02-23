import React from "react";
import "../Styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Masorybycomp() {
  return (
    <div>
      <Splide
        options={{
          perPage: 3,
          fixedWidth: false,
          height: 350,
          gap: "15px",
          drag: true,
        }}
      >
        <SplideSlide>
          <div>
            <img src="/fotky/Cerstve-krevety.avif" alt="Cerstve krevety" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Hovezi-steak.avif" alt="Hovezi steak" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Kure-cele.avif" alt="Kure" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Kureci-prsa.avif" alt="Kureci-prsa" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Losos.avif" alt="Losos" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Tunak-steak.avif" alt="Tunak steak" />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}
