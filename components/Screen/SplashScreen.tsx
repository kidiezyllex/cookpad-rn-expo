import { images } from "@/constants";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const splashImages = [images.splash1, images.splash2, images.splash3, images.splash4];
const DURATION = 1100; // ms per splash (nhanh hơn)
const FINAL_HOLD = 900; // ms giữ ảnh cuối cùng (nhanh hơn)

interface SplashScreenProps {
  onFinish?: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const fadeTimeoutRef = useRef<number | undefined>(undefined);
  const nextTimeoutRef = useRef<number | undefined>(undefined);

  // Sử dụng useLayoutEffect để set isVisible khi index thay đổi (chạy đồng bộ trước paint)
  useLayoutEffect(() => {
    setIsVisible(true);
  }, [index]);

  useEffect(() => {
    if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
    if (nextTimeoutRef.current) window.clearTimeout(nextTimeoutRef.current);

    if (index < splashImages.length - 1) {
      fadeTimeoutRef.current = window.setTimeout(() => setIsVisible(false), Math.max(0, DURATION - 400));
      nextTimeoutRef.current = window.setTimeout(() => {
        setIndex((i) => i + 1);
      }, DURATION);
    } else {
      fadeTimeoutRef.current = window.setTimeout(() => setIsVisible(false), Math.max(0, FINAL_HOLD - 400));
      nextTimeoutRef.current = window.setTimeout(() => {
        if (onFinish) {
          onFinish();
        }
      }, FINAL_HOLD);
    }

    return () => {
      if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
      if (nextTimeoutRef.current) window.clearTimeout(nextTimeoutRef.current);
    };
  }, [index, onFinish]);

  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <Image
        src={splashImages[index]}
        alt="splash"
        width={314}
        height={314}
        className={`max-w-[314px] w-full h-full object-contain transition-opacity duration-400 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        priority
      />
    </div>
  );
};

export default SplashScreen;
