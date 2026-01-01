import React from 'react';
import * as S from '../styles/ProductCard.styles';

export const ProductCard = () => {
  return (
    <S.Card>
      <S.ImageArea>
        <S.BadgeLeft>Xclusive Deal</S.BadgeLeft>
        <S.BadgeRight>-50%</S.BadgeRight>
        <span>IMG</span>
      </S.ImageArea>

      <S.Content>
        <S.TitleRow>
          <h4>FUVAL (Silver)...</h4>
          <button>+</button>
        </S.TitleRow>

        <S.MetaRow>
          <span className="code">CODE12345678</span>
          <span className="views">👁 1000</span>
        </S.MetaRow>

        <S.Specs>
          <p>กระจก</p>
          <p>W60 x H100 x D4.5 cm.</p>
        </S.Specs>

        <S.Footer>
          <S.PriceBlock>
            <span className="old-price">฿990.00</span>
            <span className="new-price">฿550 <small>/ตร.ม.</small></span>
          </S.PriceBlock>
          <S.StockStatus>In stock</S.StockStatus>
        </S.Footer>
      </S.Content>
    </S.Card>
  );
};

export default ProductCard;