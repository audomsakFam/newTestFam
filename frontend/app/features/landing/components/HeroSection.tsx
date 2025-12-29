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

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: any) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; // ระยะที่จะเลื่อนต่อการกด 1 ครั้ง (ปรับตามความกว้าง Card)

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

    return () => clearInterval(timer);
  }, []);

  return (
    <S.Wrapper>
      <S.Banner>
        {/* แสดงข้อความตาม State ปัจจุบัน */}
        <h1>{BANNERS[currentBanner].title}</h1>
        <p>{BANNERS[currentBanner].sub}</p>

        <S.Indicators>
          {BANNERS.map((_, index) => (
            <div
              key={index}
              // 3. เช็คว่าถ้า index ตรงกับ currentBanner ให้เติม class 'active'
              className={currentBanner === index ? "active" : ""}
              // แถม: กดที่ขีดเพื่อข้ามไปหน้านั้นได้
              onClick={() => setCurrentBanner(index)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </S.Indicators>
      </S.Banner>

      <S.Container>
        {/* 2. Categories */}
        <S.CatGrid>
          {categories.map((cat, index) => (
            <S.CatItem key={index}>
              <div className="box" />
              <span>{cat}</span>
            </S.CatItem>
          ))}
        </S.CatGrid>

        {/* 3. Recently Viewed */}
        <S.RecentSection>
          <h2>ดูล่าสุด</h2>

          {/* Wrapper เพื่อใช้สำหรับวางตำแหน่งลูกศร */}
          <S.SliderContainer>
            {/* ปุ่มซ้าย */}
            <S.ArrowButton className="left" onClick={() => scroll("left")}>
              {/* ใช้ Icon หรือ Text ก็ได้ */}
              &lt;
            </S.ArrowButton>

            <S.RecentList ref={scrollRef}>
              {/* Mock Items */}
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

            {/* ปุ่มขวา */}
            <S.ArrowButton className="right" onClick={() => scroll("right")}>
              &gt;
            </S.ArrowButton>
          </S.SliderContainer>
        </S.RecentSection>
      </S.Container>
    </S.Wrapper>
  );
};

export default HeroSection;
