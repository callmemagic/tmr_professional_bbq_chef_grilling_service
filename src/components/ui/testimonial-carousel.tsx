"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

interface TestimonialCarouselProps {
  imagePaths: string[];
  options?: EmblaOptionsType;
}

export function TestimonialCarousel({
  imagePaths,
  options,
}: TestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 2500, stopOnInteraction: false })
  ]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative mx-auto max-w-full overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {imagePaths.map((path, index) => (
            <div
              className="relative min-w-0 flex-shrink-0 flex-grow-0 basis-full px-2 md:basis-1/2 lg:basis-1/3"
              key={index}
            >
              <div className="overflow-hidden rounded-xl shadow-lg">
                <div className="relative aspect-video w-full">
                  <Image
                    src={path}
                    alt={`客戶評價 ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3} // Prioritize loading first few images
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-2 text-white transition hover:bg-opacity-75 disabled:opacity-30"
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
        aria-label="上一張圖片"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-black bg-opacity-50 p-2 text-white transition hover:bg-opacity-75 disabled:opacity-30"
        onClick={scrollNext}
        disabled={nextBtnDisabled}
        aria-label="下一張圖片"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
} 