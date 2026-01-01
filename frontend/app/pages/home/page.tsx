"use client";

import { theme } from "@/app/styles/theme";
import {
  Collections,
  Footer,
  Navbar,
  ProductShowcase,
  HeroSection
} from "../../ui/landing/index";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductShowcase
        title="สินค้ายอดนิยม / แนะนำ"
        bgColor={theme.colors.bgSage}
      />

      <ProductShowcase
        title={
          <>
            <span className="red-x">X</span>clusive Deal
          </>
        }
        bgColor={theme.colors.bgDark}
        isDark={true}
      />

      <Collections />
      <Footer />
    </>
  );
}
