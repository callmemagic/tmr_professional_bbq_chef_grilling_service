"use client";

import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface EventGalleryProps {
  imagePaths: string[];
}

export function EventGallery({ imagePaths }: EventGalleryProps) {
  const [index, setIndex] = useState(-1);

  const slides = imagePaths.map((src) => ({ src }));

  return (
    <>
      {/* Horizontal scrolling container */}
      <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100">
        <div className="flex space-x-3">
          {imagePaths.map((path, idx) => (
            <div
              key={idx}
              // Fixed width and aspect ratio for horizontal layout
              className="aspect-square h-32 w-32 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform duration-200 hover:scale-105 sm:h-36 sm:w-36 md:h-40 md:w-40"
              onClick={() => setIndex(idx)}
            >
              <div className="relative h-full w-full">
                <Image
                  src={path}
                  alt={`活動花絮 ${idx + 1}`}
                  fill
                  className="object-cover"
                  // Adjusted sizes for fixed thumbnail size
                  sizes="160px" // Roughly the max size of the thumbnail
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        plugins={[Thumbnails, Zoom]}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        thumbnails={{ border: 0, gap: 8, imageFit: "cover" }}
        zoom={{ doubleTapDelay: 200, doubleClickDelay: 300, maxZoomPixelRatio: 5 }}
      />
    </>
  );
} 