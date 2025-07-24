"use client";
import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, animate, stagger, useInView } from "motion/react";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "700"] });

const SVGDataURI = "data:image/svg+xml;base64,..."; // Keep as-is (your SVGDataURI)

export function PlayfulHeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div ref={ref} className="mb-20 w-full bg-gray-50 dark:bg-neutral-800">
      <div className="mx-auto grid max-h-[50rem] max-w-7xl grid-cols-1 items-start gap-10 overflow-hidden pt-10 sm:grid-cols-2 md:max-h-[40rem] md:pt-20 lg:grid-cols-3">
        <div className="px-4 py-10 md:px-8 md:py-10 lg:col-span-2">
          <h2
            className={cn(
              "text-center text-2xl font-bold tracking-tight text-neutral-900 sm:text-left sm:text-4xl lg:text-7xl dark:text-neutral-50",
              manrope.className
            )}
          >
            Your favourite{" "}
            <motion.span
              initial={{ backgroundSize: "0% 100%" }}
              animate={isInView ? { backgroundSize: "100% 100%" } : {}}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="inline bg-yellow-300/50 bg-[length:0%_100%] bg-left-bottom bg-no-repeat"
              style={{
                backgroundImage:
                  "linear-gradient(to top, #facc15 60%, transparent 60%)",
              }}
            >
              productivity tool
            </motion.span>{" "}
            is now available for{" "}
            <motion.span
              initial={{ backgroundSize: "0% 2px" }}
              animate={isInView ? { backgroundSize: "100% 2px" } : {}}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-400 bg-no-repeat bg-[length:0%_2px] bg-bottom"
            >
              mobile
            </motion.span>
          </h2>
          <p className="mt-4 max-w-2xl text-center text-sm text-neutral-500 sm:text-left md:mt-10 md:text-lg dark:text-neutral-400">
            Aceternity AI brings you the best productivity tools for your
            desktop, now available on mobile. Download the app now to avail
            additional{" "}
            <motion.span
              initial={{ backgroundSize: "0% 2px" }}
              animate={isInView ? { backgroundSize: "100% 2px" } : {}}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-400 bg-no-repeat bg-[length:0%_2px] bg-bottom"
            >
              20% discount
            </motion.span>{" "}
            and take your productivity to the next level.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 [perspective:800px] sm:flex-row">
            <button className="w-full origin-left rounded-lg bg-yellow-400 px-4 py-2 text-base font-bold text-black transition duration-200 hover:shadow-lg hover:[transform:rotateX(10deg)] sm:w-auto">
              Get the app
            </button>
            <button className="rounded-lg border border-transparent px-4 py-2 text-base text-black transition duration-200 hover:border-yellow-500 dark:text-white">
              Read changelog
            </button>
          </div>
        </div>
        <div className="relative flex h-full w-full flex-shrink-0 justify-end overflow-hidden">
          <Skeleton />
        </div>
      </div>
    </div>
  );
}

export const Skeleton = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    const sequence = [
      [".first", { opacity: [0, 1] }, { duration: 1, ease: "easeOut" }],
      [".second", { opacity: [0, 1] }, { duration: 1, ease: "easeOut" }],
      [
        ".images .image",
        {
          opacity: [0, 1],
          rotate: [0, Math.floor(Math.random() * 10), 0],
          scale: [1, 1.1, 1],
        },
        { duration: 1, ease: "easeOut", delay: stagger(0.4) },
      ],
    ];

    //@ts-ignore
    if (isInView) animate(sequence);
  }, [isInView]);

  return (
    <div ref={ref} className="realtive m-auto h-[600px] w-[360px] pt-20">
      <div
        style={{
          backgroundImage: `url('${SVGDataURI}')`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 mx-auto h-[600px] w-full max-w-[360px] dark:invert dark:filter"
      />
      <div className="relative z-20 mt-0 flex flex-col gap-4 px-8 md:mt-10">
        <div className="first rounded-lg bg-gray-100 p-2 text-sm text-neutral-800 opacity-0 dark:bg-neutral-700 dark:text-neutral-100">
          Hey! Please show me my latest images from my latest trip.
        </div>
        <div className="second rounded-lg bg-gray-100 p-2 text-sm text-neutral-800 opacity-0 dark:bg-neutral-700 dark:text-neutral-100">
          Sure, here are the latest images from your trip to the island of deez
          nuts.
        </div>
        <div className="images grid grid-cols-2 gap-2">
          {[
            "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=2992&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=3449&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=3592&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop",
          ].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`island ${i}`}
              height="200"
              width="200"
              className="image h-full max-h-[100px] w-full rounded-lg object-cover opacity-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const MobileMockup = ({ className }: { className?: string }) => {
  return (
    <svg
      width="421"
      height="852"
      viewBox="0 0 421 852"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "absolute inset-0 mx-auto h-full w-full flex-shrink-0 object-cover object-top text-neutral-900 dark:text-neutral-50",
        className
      )}
    >
      {/* ... existing SVG path code ... */}
    </svg>
  );
};
