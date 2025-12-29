'use client';
import React from 'react';
import { ProductCard } from './ProductCard';
import * as S from '../styles/Collections.styles';

export const Collections = () => {
  return (
    <S.Section>
      <S.Container>
        
        {/* 1. Collections Header */}
        <S.Header>
          <div>
            <h2>Collections</h2>
            <p>ค้นหาแรงบันดาลใจ ผ่านการออกแบบ และคัดสรรวัสดุที่น่าสนใจเข้าไว้ด้วยกัน</p>
          </div>
          <a href="#">คอลเลคชั่นทั้งหมด &gt;</a>
        </S.Header>

        {/* 2. Collections Content (รูปใหญ่ซ้าย + สินค้าขวา) */}
        <S.ContentWrapper>
          <S.LargeImage>
             {/* ใส่ <img> src="..." alt="Room" /> ตรงนี้ */}
          </S.LargeImage>
          
          <S.ProductList>
             {/* Reuse ProductCard มาวางตรงนี้ */}
             <ProductCard />
             <ProductCard />
             {/* เพิ่มปุ่มลูกศรขวาถ้าต้องการ */}
          </S.ProductList>
        </S.ContentWrapper>

        {/* 3. Wallplast Banner */}
        <S.WallplastSection>
           <S.WallplastContent>
              <h2>Wallplast</h2>
              <p>
                บริการตกแต่งผนังที่คุณได้เลือกสไตล์ วัสดุ และ accessories ได้เอง
                โดยมีระบบการผลิตที่เป็นมาตรฐานโดยใช้เครื่องจักรและการกำหนดค่า
                ที่มีความละเอียดสูง...
              </p>
              <button>View more &nbsp; ⟶</button>
           </S.WallplastContent>
        </S.WallplastSection>

        {/* 4. Partners */}
        <S.PartnerSection>
          <h3>ร้านค้าที่ร่วมขายกับเรา</h3>
          <S.PartnerGrid>
             {[1,2,3,4,5,6,7].map(i => <S.PartnerItem key={i} />)}
          </S.PartnerGrid>
        </S.PartnerSection>

      </S.Container>
    </S.Section>
  );
};

export default Collections