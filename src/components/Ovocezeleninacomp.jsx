import React from "react";
import "../Styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export default function Ovocezeleninacomp() {
  return (
    <div className="Ovocezeleninacomp">
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
            <img src="/fotky/boruvky.avif" alt="Boruvky" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/banany.avif" alt="Banany" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/brambory.avif" alt="Brambory" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Jahody.avif" alt="Jahody" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Cibule.avif" alt="Cibule" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Maliny.avif" alt="Maliny" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Citrony.avif" alt="Citrony" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Mrkev.avif" alt="Mrkev" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Kvetak.avif" alt="Kvetak" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Okurky.avif" alt="Okurky" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Papriky.avif" alt="Papriky" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Spenat.avif" alt="Spenat" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Pomerance.avif" alt="Pomerance" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Zeli.avif" alt="Zeli" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div>
            <img src="/fotky/Rajcata.avif" alt="Rajcata" />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}
