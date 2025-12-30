"use client";

import React, { useState, useEffect, useRef } from "react";
import * as S from "../styles/HeroSection.styles";

const BANNERS = [
  { id: 1, title: "BANNER XSURFACE", sub: "1440x472 px" },
  { id: 2, title: "GRAND OPENING", sub: "Welcome to XSurface" },
  { id: 3, title: "SUMMER SALE", sub: "Up to 50% Off" },
  { id: 4, title: "NEW ARRIVALS", sub: "Collection 2025" },
  { id: 5, title: "EXCLUSIVE MEMBER", sub: "Sign up today" },
  { id: 6, title: "FLASH DEAL", sub: "Limited Time Only" },
];

export const HeroSection = () => {
  const categories = [
    "Laminate",
    "Tile",
    "Stone",
    "Wood",
    "Mirror",
    "WPC",
    "Metal",
    "All Product",
  ];

  const [currentBanner, setCurrentBanner] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction: any) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
    }, 3000);
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => {
      window.removeEventListener("resize", checkScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Banner>
        <h1>{BANNERS[currentBanner].title}</h1>
        <p>{BANNERS[currentBanner].sub}</p>
        <S.Indicators>
          {BANNERS.map((_, index) => (
            <div
              key={index}
              className={currentBanner === index ? "active" : ""}
              onClick={() => setCurrentBanner(index)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </S.Indicators>
      </S.Banner>

      <S.Container>
        <S.CatGrid>
          {categories.map((cat, index) => (
            <S.CatItem key={index}>
              <div className="box" />
              <span>{cat}</span>
            </S.CatItem>
          ))}
        </S.CatGrid>

        <S.RecentSection>
          <h2>ดูล่าสุด</h2>
          <S.SliderContainer>
            {canScrollLeft && (
              <S.ArrowButton className="left" onClick={() => scroll("left")}>
                &lt;
              </S.ArrowButton>
            )}
            <S.RecentList ref={scrollRef} onScroll={checkScroll}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <S.SimpleCard key={item}>
                  <div className="img-box">Product image</div>
                  <div className="name">Product name...</div>
                  <div className="price">
                    ฿550 <small>/ตร.ม.</small>
                  </div>
                </S.SimpleCard>
              ))}
            </S.RecentList>
            {canScrollRight && (
              <S.ArrowButton className="right" onClick={() => scroll("right")}>
                &gt;
              </S.ArrowButton>
            )}
          </S.SliderContainer>
        </S.RecentSection>
      </S.Container>
    </S.Wrapper>
  );
};

export default HeroSection;
