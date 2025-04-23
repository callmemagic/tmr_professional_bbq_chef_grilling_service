"use client";

import { useState, useEffect } from 'react';
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

// 設置結束日期為本月最後一天
const getEndDate = () => {
  const now = new Date();
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  return lastDay;
};

export function CountdownTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = getEndDate();
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      
      if (difference < 0) {
        clearInterval(interval);
        return;
      }
      
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      
      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 px-4 shadow-md flex flex-col sm:flex-row items-center justify-center">
      <div className="flex items-center mr-4">
        <span className="mr-2 text-yellow-200 font-bold">🔥 月底優惠倒計時：</span>
        <div className="flex space-x-1">
          <div className="bg-black bg-opacity-30 px-2 py-1 rounded">
            <span className="font-mono font-bold">{days}</span>
            <span className="text-xs ml-1">日</span>
          </div>
          <div className="bg-black bg-opacity-30 px-2 py-1 rounded">
            <span className="font-mono font-bold">{hours}</span>
            <span className="text-xs ml-1">時</span>
          </div>
          <div className="bg-black bg-opacity-30 px-2 py-1 rounded">
            <span className="font-mono font-bold">{minutes}</span>
            <span className="text-xs ml-1">分</span>
          </div>
          <div className="bg-black bg-opacity-30 px-2 py-1 rounded">
            <span className="font-mono font-bold">{seconds}</span>
            <span className="text-xs ml-1">秒</span>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-2 sm:mt-0">
        <span className="mr-2 font-semibold">尚餘少量名額！WhatsApp即刻預留：</span>
        <WhatsAppButton
          phoneNumber="85259727945"
          message="你好，我想預留BBQ到會服務"
          className="text-sm font-semibold py-1 px-3"
        >
          即刻預留
        </WhatsAppButton>
      </div>
    </div>
  );
} 