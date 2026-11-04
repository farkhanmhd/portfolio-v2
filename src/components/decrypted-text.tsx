import { animate, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// React Bits DecryptedText adaptation: one sequential intro, driven by Motion.
export const DecryptedText = ({
  text,
  delay,
}: {
  text: string;
  delay: number;
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect((): (() => void) | undefined => {
    const cells =
      containerRef.current?.querySelectorAll<HTMLElement>("[data-glyph]");

    if (!cells) {
      return undefined;
    }

    const measure = document.createElement("canvas").getContext("2d");

    const font = containerRef.current
      ? getComputedStyle(containerRef.current)
      : null;

    if (measure && font) {
      measure.font = `${font.fontWeight} ${font.fontSize} ${font.fontFamily}`;
    }

    const paint = (progress: number) => {
      for (const [index, cell] of cells.entries()) {
        const glyph =
          index < progress || text[index] === " "
            ? text[index]
            : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

        cell.textContent = glyph;
        const width = measure?.measureText(glyph).width ?? cell.clientWidth;
        cell.style.transform =
          index < progress
            ? "none"
            : `scaleX(${Math.min(1, cell.clientWidth / Math.max(1, width))})`;
      }
    };

    if (reducedMotion === true) {
      paint(text.length);

      return undefined;
    }

    const ticker = { lastStep: -1 };

    const playback = animate(0, text.length, {
      delay,
      duration: 1.1,
      ease: "linear",
      onUpdate: (progress) => {
        const step = Math.floor(progress * 2);

        if (step !== ticker.lastStep) {
          ticker.lastStep = step;
          paint(progress);
        }
      },
      onComplete: () => {
        paint(text.length);
      },
    });

    return () => {
      playback.stop();
    };
  }, [delay, reducedMotion, text]);

  return (
    <span
      aria-hidden="true"
      className="block whitespace-nowrap"
      ref={containerRef}
    >
      {Array.from(text, (character, index) => (
        // Character positions are stable for this immutable headline line.
        // oxlint-disable-next-line react/no-array-index-key
        <span className="relative inline-block whitespace-pre" key={index}>
          <span className="invisible">{character}</span>
          <span className="absolute inset-0 text-center" data-glyph="">
            {character === " " ? " " : GLYPHS[(index * 7) % GLYPHS.length]}
          </span>
        </span>
      ))}
    </span>
  );
};
