export type IProductData = {
  id: string;
  title: string;
  image?: string;
  badgeText?: string; // เช่น "Xclusive Deal"
  discountPercent?: number; // เช่น 50
  productCode: string;
  viewCount: number;
  specs: string[]; // เก็บเป็น Array เพื่อความยืดหยุ่นในการวนลูป
  oldPrice: number;
  newPrice: number;
  priceUnit: string; // เช่น "/ตร.ม." หรือ "/ชิ้น"
  isInStock: boolean;
};
