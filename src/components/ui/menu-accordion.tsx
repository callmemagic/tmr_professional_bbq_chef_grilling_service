"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface MenuAccordionProps {
  items: string[];
  className?: string;
}

export function MenuAccordion({ items, className }: MenuAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("w-full", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-lg bg-orange-50 px-4 py-2 text-left text-orange-600 hover:bg-orange-100"
      >
        <span className="font-medium">查看完整餐單</span>
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 space-y-1 rounded-lg bg-orange-50 p-4 text-sm text-gray-700">
          {items.map((item, index) => (
            <div key={index} className="border-b border-orange-100 py-1 last:border-0">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 