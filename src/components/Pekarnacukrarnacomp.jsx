import React from "react";
import "../Styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Pekarnacukrarnacomp() {
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
            <img src="/fotky/Bageta.avif" alt="Bageta" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Kvaskovy-chleb.avif" alt="Kvaskovy chleb" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Kobliha.avif" alt="Kobliha" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Mini-croissant.avif" alt="Mini Croissant" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Skoricovy-snek.avif" alt="Skoricovy snek" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Toastovy-chleb.avif" alt="Toastovy chleb" />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}
