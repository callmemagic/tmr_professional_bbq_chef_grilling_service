"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  phoneNumber: string;
  message?: string;
}

export function WhatsAppButton({
  children,
  className,
  phoneNumber,
  message = "你好，我想查詢BBQ到會服務",
  ...props
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "group relative inline-flex h-11 animate-shimmer cursor-pointer items-center justify-center rounded-xl border-0 bg-[linear-gradient(110deg,#ff4800,45%,#ff8a00,55%,#ff4800)] bg-[length:200%_100%] px-8 py-2 font-medium text-white transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50 hover:bg-[length:300%_100%]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
} 