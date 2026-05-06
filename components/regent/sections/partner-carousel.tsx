"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { partnerCompanies } from "@/lib/regent-content";
import { SectionEyebrow } from "@/components/regent/ui/primitives";

const BASE_RATE = 1;
const CONTROL_RATE = 8;
const CONTROL_DURATION = 1300;

export function PartnerCarouselSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const currentRateRef = useRef(BASE_RATE);
  const targetRateRef = useRef(BASE_RATE);
  const boostTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const firstGroup = track?.firstElementChild;

    if (!(track instanceof HTMLDivElement) || !(firstGroup instanceof HTMLElement)) {
      return;
    }

    let rateFrame = 0;

    const createAnimation = () => {
      const groupWidth = firstGroup.offsetWidth;
      const previousAnimation = animationRef.current;
      const previousTime = previousAnimation?.currentTime ?? 0;

      previousAnimation?.cancel();

      const duration = Math.max((groupWidth / 30) * 1000, 12000);
      const nextAnimation = track.animate(
        [
          { transform: "translate3d(0, 0, 0)" },
          { transform: `translate3d(-${groupWidth}px, 0, 0)` },
        ],
        {
          duration,
          easing: "linear",
          iterations: Infinity,
        },
      );

      nextAnimation.currentTime =
        typeof previousTime === "number" ? previousTime % duration : 0;
      nextAnimation.playbackRate = currentRateRef.current;
      animationRef.current = nextAnimation;
    };

    const easeRate = () => {
      const animation = animationRef.current;

      if (animation) {
        currentRateRef.current +=
          (targetRateRef.current - currentRateRef.current) * 0.12;
        animation.playbackRate = currentRateRef.current;
      }

      rateFrame = window.requestAnimationFrame(easeRate);
    };

    createAnimation();

    const resizeObserver = new ResizeObserver(createAnimation);
    resizeObserver.observe(firstGroup);
    rateFrame = window.requestAnimationFrame(easeRate);

    return () => {
      window.cancelAnimationFrame(rateFrame);
      resizeObserver.disconnect();
      animationRef.current?.cancel();
      animationRef.current = null;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (boostTimerRef.current !== null) {
        window.clearTimeout(boostTimerRef.current);
      }
    };
  }, []);

  function moveCarousel(direction: "previous" | "next") {
    targetRateRef.current =
      direction === "previous" ? -CONTROL_RATE : CONTROL_RATE;

    if (boostTimerRef.current !== null) {
      window.clearTimeout(boostTimerRef.current);
    }

    boostTimerRef.current = window.setTimeout(() => {
      targetRateRef.current = BASE_RATE;
    }, CONTROL_DURATION);
  }

  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-12 md:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-3 md:max-w-[760px]">
            <SectionEyebrow label="Companies We Work With" />
            <h2 className="text-3xl font-bold leading-tight text-[var(--foreground)] md:text-[36px]">
              Trusted by production teams across Sri Lanka.
            </h2>
            <p className="text-lg leading-8 text-[var(--muted)]">
              Regent Technologies supports established manufacturers, furniture
              producers, plastics companies, and industrial teams that depend on
              reliable cutting performance.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous company logos"
              onClick={() => moveCarousel("previous")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--regent-blue-900)]/15 bg-white text-[var(--regent-blue-900)] transition hover:border-[var(--regent-red)] hover:text-[var(--regent-red)] focus-visible:ring-2 focus-visible:ring-[var(--regent-red)] focus-visible:ring-offset-2"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next company logos"
              onClick={() => moveCarousel("next")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--regent-blue-900)]/15 bg-white text-[var(--regent-blue-900)] transition hover:border-[var(--regent-red)] hover:text-[var(--regent-red)] focus-visible:ring-2 focus-visible:ring-[var(--regent-red)] focus-visible:ring-offset-2"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className="partner-carousel-mask mt-10 overflow-hidden py-3"
          aria-label="Companies Regent Technologies works with"
        >
          <div className="partner-carousel-track" ref={trackRef}>
            {Array.from({ length: 3 }, (_, groupIndex) => (
              <div
                key={groupIndex}
                className="partner-carousel-group"
                aria-hidden={groupIndex > 0}
              >
                {partnerCompanies.map((company) => (
                  <div
                    key={`${company.name}-${groupIndex}`}
                    className="group flex h-32 w-[248px] shrink-0 items-center justify-center rounded-lg border border-[var(--regent-blue-900)]/8 bg-white px-7 shadow-[0_12px_30px_rgba(17,37,90,0.045)] ring-1 ring-black/[0.018] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--regent-red)]/25 hover:shadow-[0_16px_36px_rgba(17,37,90,0.07)] sm:h-36 sm:w-[286px]"
                  >
                    <Image
                      src={company.logo}
                      alt={groupIndex > 0 ? "" : company.name}
                      width={company.width}
                      height={company.height}
                      className="max-h-[72px] w-auto object-contain sm:max-h-[76px]"
                      sizes="(max-width: 640px) 248px, 286px"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
