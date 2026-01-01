"use client";

import { useState, useEffect } from "react";
import * as S from "../styles/ContentHome.style";
import { CardType, IDashboardCard } from "@/app/types/dashboard.type";
import DashboardCard from "./DashboardCard";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { EmptySlot } from "./EmptySlot";

const generateEmptySlots = (count: number): IDashboardCard[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `empty-${i}`,
    type: "EMPTY",
    title: "",
    w: 8,
    h: 3,
  }));
};

const ContentHome = () => {
  const [cards, setCards] = useState<IDashboardCard[]>([
    // { id: "1", type: "STAT_USER", title: "Total User", w: 8, h: 3 },
    ...generateEmptySlots(6),
  ]);
  const [isMounted, setIsMounted] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (over && active.id !== over.id) {
      setCards((item) => {
        const oldI = item.findIndex((i) => i.id === active.id);
        const newI = item.findIndex((i) => i.id === over.id);

        return arrayMove(item, oldI, newI);
      });
    }
  };

  const addCard = (type: CardType) => {
    const emptyIndex = cards.findIndex((c) => c.type === "EMPTY");

    if (emptyIndex === -1) {
      alert("Dashboard เต็มแล้ว!");
      return;
    }

    const newCard: IDashboardCard = {
      id: Date.now().toString(),
      type: type,
      title: `New ${type}`,
      w: 8,
      h: 3,
    };

    const newCards = [...cards];
    newCards[emptyIndex] = newCard;
    setCards(newCards);
  };

  const removeCard = (id: string) => {
    setCards(
      cards.map((c) => {
        if (c.id === id) {
          return {
            id: `empty-${Date.now()}`,
            type: "EMPTY",
            title: "",
            w: 8,
            h: 3
          };
        }
        return c;
      })
    );
  };
  const handleResize = (id: string, newW: number, newH: number) => {
    setCards((prevCards) =>
      prevCards.map((c) => (c.id === id ? { ...c, w: newW, h: newH } : c))
    );
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <S.Container>
        <S.Toolbar>...</S.Toolbar>
        <S.Grid>
          {cards.map((card) => (
            <DashboardCard
              key={card.id}
              card={card}
              onRemove={() => {}}
              onResize={handleResize}
            />
          ))}
        </S.Grid>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Toolbar>
        <h3>Dashboard</h3>
        <S.ButtonGroup>
          <button onClick={() => addCard("STAT_USER")}>+ Add State</button>
          <button onClick={() => addCard("CHART_LINE")}>+ Add Chart</button>
        </S.ButtonGroup>
      </S.Toolbar>

      <DndContext
        id="dashboard-dnd"
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={cards.map((i) => i.id)}
          strategy={rectSortingStrategy}
        >
          <S.Grid>
            {cards &&
              cards.map((card) => {
                if (card.type !== "EMPTY") {
                  return (
                    <DashboardCard
                      key={card.id}
                      card={card}
                      onRemove={() => removeCard(card.id)} // ดูวิธีแก้ removeCard ด้านล่าง
                      onResize={handleResize}
                    />
                  );
                }

                return <EmptySlot key={card.id} card={card} />;
              })}
          </S.Grid>
        </SortableContext>
      </DndContext>
    </S.Container>
  );
};

export default ContentHome;
