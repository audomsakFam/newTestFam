"use client";
import React, { useRef, useState, useEffect } from "react";
import { ProductCard } from "../../product/components/ProductCard";
import * as S from "../styles/ProductShowcase.styles";

interface Props {
  title: React.ReactNode;
  bgColor?: string;
  isDark?: boolean;
}

export const ProductShowcase = ({ title, bgColor, isDark }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalPages = 4;

  const scroll = (direction: "left" | "right") => {
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

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      const scrollableWidth = scrollWidth - clientWidth;

      const scrollPercentage = scrollLeft / scrollableWidth;

      const newIndex = Math.round(scrollPercentage * (totalPages - 1));

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, [activeIndex]);

  return (
    <S.Section $bgColor={bgColor} $isDark={isDark}>
      <S.Container>
        <S.Header $isDark={isDark}>
          <h2>{title}</h2>
          <a href="#">สินค้าทั้งหมด &gt;</a>
        </S.Header>

        <S.SliderWrapper>
          <S.NavButton className="prev" onClick={() => scroll("left")}>
            &lt;
          </S.NavButton>

          <S.CardList ref={scrollRef}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <ProductCard key={item} />
            ))}
          </S.CardList>

          <S.NavButton className="next" onClick={() => scroll("right")}>
            &gt;
          </S.NavButton>
        </S.SliderWrapper>

        <S.Pagination>
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={index === activeIndex ? "active" : ""}
            />
          ))}
        </S.Pagination>
      </S.Container>
    </S.Section>
  );
};

export default ProductShowcase;
