import ProductCard from "./ProductCard";
import * as S from "../styles/ProductHome.style";
import { IProductData } from "@/app/types/product.type";

const dummyProducts: IProductData[] = [
  {
    id: "p1",
    title: "FUVAL Silver Mirror Glossy",
    badgeText: "Xclusive Deal",
    discountPercent: 50,
    productCode: "CODE12345678",
    viewCount: 1200,
    specs: ["กระจกเงา", "W60 x H100 x D4.5 cm."],
    oldPrice: 990.0,
    newPrice: 550.0,
    priceUnit: "/ตร.ม.",
    isInStock: true,
  },
  {
    id: "p2",
    title: "Eco-Wood Flooring Oak",
    badgeText: "Best Seller",
    discountPercent: 15,
    productCode: "WOOD-8890",
    viewCount: 850,
    specs: ["ไม้สังเคราะห์", "หนา 12 มม.", "กันน้ำ 100%"],
    oldPrice: 1200.0,
    newPrice: 1020.0,
    priceUnit: "/กล่อง",
    isInStock: true,
  },
  {
    id: "p3",
    title: "Ceramic Tile Arctic White",
    productCode: "TILE-WHT-01",
    viewCount: 450,
    specs: ["เซรามิก", "60x60 cm.", "ผิวแมตต์"],
    oldPrice: 450.0,
    newPrice: 450.0,
    priceUnit: "/ตร.ม.",
    isInStock: false,
  },
  {
    id: "p4",
    title: "Modern Loft Pendant Lamp",
    badgeText: "New Arrival",
    discountPercent: 30,
    productCode: "LAMP-LFT-99",
    viewCount: 2100,
    specs: ["โคมไฟเพดาน", "วัสดุเหล็กพ่นดำ", "ขั้ว E27"],
    oldPrice: 2490.0,
    newPrice: 1743.0,
    priceUnit: "/ชุด",
    isInStock: true,
  },
  {
    id: "p5",
    title: "Wall Paint Velvet Blue",
    productCode: "PAINT-VLB-05",
    viewCount: 320,
    specs: ["สีทาภายใน", "ถัง 5 แกลลอน", "เช็ดล้างได้"],
    oldPrice: 1850.0,
    newPrice: 1850.0,
    priceUnit: "/ถัง",
    isInStock: true,
  },
  {
    id: "p6",
    title: "Sanitary Ware Flush Master",
    badgeText: "Special Offer",
    discountPercent: 40,
    productCode: "BATH-WC-02",
    viewCount: 1540,
    specs: ["โถสุขภัณฑ์", "ประหยัดน้ำ Dual Flush"],
    oldPrice: 8900.0,
    newPrice: 5340.0,
    priceUnit: "/ชุด",
    isInStock: true,
  },
  {
    id: "p7",
    title: "Kitchen Sink Deep Bowl",
    productCode: "SINK-SS-11",
    viewCount: 670,
    specs: ["สแตนเลส 304", "1 หลุม 1 ที่พัก"],
    oldPrice: 3200.0,
    newPrice: 2850.0,
    priceUnit: "/ชิ้น",
    isInStock: true,
  },
  {
    id: "p8",
    title: "Curtain Blackout UV",
    badgeText: "Hot Item",
    discountPercent: 20,
    productCode: "CURT-BK-07",
    viewCount: 980,
    specs: ["ม่านกันแสง", "กัน UV 99%", "กว้าง 140x250 cm."],
    oldPrice: 750.0,
    newPrice: 600.0,
    priceUnit: "/ผืน",
    isInStock: false,
  },
  {
    id: "p9",
    title: "LED Smart Strip RGB",
    badgeText: "Tech Choice",
    discountPercent: 10,
    productCode: "LED-STR-RGB",
    viewCount: 3500,
    specs: ["ไฟเส้นอัจฉริยะ", "ยาว 5 เมตร", "App Control"],
    oldPrice: 590.0,
    newPrice: 531.0,
    priceUnit: "/ม้วน",
    isInStock: true,
  },
];

const ProductHome = () => {
  return (
    <S.Container>
      <S.Header>
        <h3>Product</h3>
        <S.ButtonLink href={"/pages/dashboard/product/addProduct"}>
          Add Product
        </S.ButtonLink>
      </S.Header>
      <S.ContextProduct>
          {dummyProducts.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
      </S.ContextProduct>
    </S.Container>
  );
};

export default ProductHome;
