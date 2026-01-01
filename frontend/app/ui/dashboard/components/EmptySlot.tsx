import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import * as S from "../styles/EmptySlot.style";
import { IDashboardCard } from "@/app/types/dashboard.type";
export const EmptySlot = ({ card }: { card: IDashboardCard }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: card.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <S.EmptyWrapper
      ref={setNodeRef}
      style={style}
      $w={card.w}
      $h={card.h}
      {...attributes}
      {...listeners}
    >
      <span>+</span>
    </S.EmptyWrapper>
  );
};
