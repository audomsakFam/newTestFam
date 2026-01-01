export type CardType =
  | "STAT_USER"
  | "STAT_REVENUE"
  | "CHART_LINE"
  | "LIST_RECENT"
  | 'EMPTY';

export type IDashboardCard = {
  id: string;
  type: CardType;
  title: string;
  size?: "small" | "medium" | "large"; // สำหรับจัดการความกว้างใน Grid
  w: number; // grid-column-end: span w
  h: number; // grid-row-end: span h
};

export type DashboardCardProps = {
  card: IDashboardCard;
  onRemove: () => void;
  onResize: (id: string, newW: number, newH: number) => void;
};
