"use client";

import { CardType, DashboardCardProps } from "@/app/types/dashboard.type";
import * as S from "../styles/DashboardCard.style";
import { Faders, X } from "phosphor-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useState, useRef } from "react";

const renderCardContent = (type: CardType) => {
  switch (type) {
    case "STAT_USER":
      return (
        <div>
          <h1>1,234</h1>
          <p>Active Users</p>
        </div>
      );
    case "STAT_REVENUE":
      return (
        <div>
          <h1>$45.2k</h1>
          <p>Total Revenue</p>
        </div>
      );
    case "CHART_LINE":
      return (
        <div style={{ height: "100px", background: "#333" }}>
          Line Chart Placeholder
        </div>
      );
    default:
      return <div>No Content</div>;
  }
};
const GRID_UNIT_SIZE = 80;

const DashboardCard = ({ card, onRemove, onResize }: DashboardCardProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card.id });

  const [visualSize, setVisualSize] = useState<{ w: number; h: number } | null>(
    null
  );
  const cardRef = useRef<HTMLDivElement | null>(null);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: visualSize ? "none" : transition,
    zIndex: visualSize ? 100 : isDragging ? 100 : 1,
    opacity: isDragging ? 0.5 : 1,
  };

  const handleRexize = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (!cardRef.current) return;

    const startX = e.clientX;
    const startY = e.clientY;
    const startPixelW = cardRef.current.offsetWidth;
    const startPixelH = cardRef.current.offsetHeight;

    setVisualSize({ w: startPixelW, h: startPixelH });

    const onMouseMove = (moveEvent: MouseEvent) => {
      // คำนวณระยะที่เมาส์ขยับ (Delta)
      const currentDeltaX = moveEvent.clientX - startX;
      const currentDeltaY = moveEvent.clientY - startY;

      // อัปเดตขนาด Visual เป็น Pixel (เพื่อให้ภาพตามมือเป๊ะๆ)
      // Math.max(80... คือกันไม่ให้ย่อจนหายไป (อย่างน้อยต้อง 1 ช่อง)
      setVisualSize({
        w: Math.max(GRID_UNIT_SIZE, startPixelW + currentDeltaX),
        h: Math.max(GRID_UNIT_SIZE, startPixelH + currentDeltaY),
      });
    };

    const onMouseUp = (upEvent: MouseEvent) => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);

      const finalDeltaX = upEvent.clientX - startX;
      const finalDeltaY = upEvent.clientY - startY;

      const finalPixelW = startPixelW + finalDeltaX;
      const finalPixelH = startPixelH + finalDeltaY;

      const newGridW = Math.max(1, Math.round(finalPixelW / GRID_UNIT_SIZE));
      const newGridH = Math.max(1, Math.round(finalPixelH / GRID_UNIT_SIZE));

      onResize(card.id, newGridW, newGridH);

      setVisualSize(null);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const setCombinedRef = (node: HTMLDivElement) => {
    setNodeRef(node);
    cardRef.current = node;
  };

  return (
    <S.CardWrapper
      $w={card.w}
      $h={card.h}
      style={style}
      ref={setCombinedRef}
      $isDragging={isDragging}
      $visualSize={visualSize}
    >
      <S.CardHeader {...attributes} {...listeners}>
        <S.CardTitle>{card.title}</S.CardTitle>
        <S.ActionButtons>
          <Faders
            size={16}
            onClick={(e) => {
              e.stopPropagation();
              alert("Settings for " + card.id);
            }}
          />
          <X
            size={16}
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
          />
        </S.ActionButtons>
      </S.CardHeader>

      <S.CardBody>{renderCardContent(card.type)}</S.CardBody>

      <S.GlowEffect />
      <S.ResizeHandle onMouseDown={handleRexize}></S.ResizeHandle>
    </S.CardWrapper>
  );
};

export default DashboardCard;
