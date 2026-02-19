"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const CustomerImageCycler = () => {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 1 ? 2 : 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative -mr-8 sm:-mr-12 lg:-mr-20">
      {currentImage === 1 ? (
        <Image
          src="/image/persons1.svg"
          alt="Customer 1"
          width={230}
          height={230}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full border-2 sm:border-3 lg:border-4 border-[#17181b]"
        />
      ) : (
        <Image
          src="/image/persons2.svg"
          alt="Customer 2"
          width={230}
          height={230}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full border-2 sm:border-3 lg:border-4 border-[#17181b]"
        />
      )}
    </div>
  );
};

export default CustomerImageCycler;
