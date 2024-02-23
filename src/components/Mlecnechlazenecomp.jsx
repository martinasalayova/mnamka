import React from "react";
import "../Styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Mlecnechlazenecomp() {
  return (
    <div>
      <Splide
        options={{
          perPage: 4,
          fixedWidth: false,
          height: 350,
          gap: "15px",
          drag: true,
        }}
      >
        <SplideSlide>
          <div>
            <img src="/fotky/Cerstvy-syr.avif" alt="Cerstvy-syr" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img
              src="/fotky/Chobani-recky-jogurt.avif"
              alt="Chobani Recky jogurt"
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Kerrygold-maslo.avif" alt="Kerrygold maslo" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Natural-milk.avif" alt="Cerstve mleko" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Niva.avif" alt="Niva" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Vejce.avif" alt="Vejce" />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}
