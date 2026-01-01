import { IProductData } from "@/app/types/product.type";
import * as S from "../styles/ProductCard.styles";

export const ProductCard = ({ data }: { data: IProductData }) => {
  return (
    <S.Card>
      <S.ImageArea>
        {/* แสดง Badge เฉพาะเมื่อมีข้อมูล */}
        {data.badgeText && <S.BadgeLeft>{data.badgeText}</S.BadgeLeft>}
        {data.discountPercent && (
          <S.BadgeRight>-{data.discountPercent}%</S.BadgeRight>
        )}

        {data.image ? (
          <img src={data.image} alt={data.title} />
        ) : (
          <span>IMG</span>
        )}
      </S.ImageArea>

      <S.Content>
        <S.TitleRow>
          <h4>{data.title}</h4>
          <button>+</button>
        </S.TitleRow>

        <S.MetaRow>
          <span className="code">{data.productCode}</span>
          <span className="views">👁 {data.viewCount.toLocaleString()}</span>
        </S.MetaRow>

        <S.Specs>
          {/* ใช้ map เพื่อรองรับจำนวน Specs ที่ไม่เท่ากันในแต่ละสินค้า */}
          {data.specs.map((spec, index) => (
            <p key={index}>{spec}</p>
          ))}
        </S.Specs>

        <S.Footer>
          <S.PriceBlock>
            {/* ถ้าไม่มีส่วนลด ไม่ต้องแสดงราคาเก่า */}
            {data.oldPrice > data.newPrice && (
              <span className="old-price">
                ฿{data.oldPrice.toLocaleString()}
              </span>
            )}
            {/* <S.PriceInfo>
              <span className="new-price">฿{data.newPrice.toLocaleString()}</span>
              <small>{data.priceUnit}</small>
            </S.PriceInfo> */}
          </S.PriceBlock>

          {/* เปลี่ยนสีตามสถานะสต็อก  $inStock={data.isInStock}*/}
          <S.StockStatus>
            {data.isInStock ? "In stock" : "Out of stock"}
          </S.StockStatus>
        </S.Footer>
      </S.Content>
    </S.Card>
  );
};

export default ProductCard;
