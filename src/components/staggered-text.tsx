import { motion } from "motion/react";

import { useMotionPreference } from "../lib/use-motion-preference";

interface StaggeredTextProps {
  text: string;
  segmentBy?: "chars" | "words" | "lines";
  delay?: number;
  duration?: number;
}

const graphemes = new Intl.Segmenter(undefined, { granularity: "grapheme" });
const WORD_BREAK = /(?<=\s)/u;

const splitLine = (
  line: string,
  segmentBy: StaggeredTextProps["segmentBy"]
) => {
  if (segmentBy === "lines") {
    return [line];
  }

  if (segmentBy === "words") {
    return line.split(WORD_BREAK);
  }

  return Array.from(graphemes.segment(line), (part) => part.segment);
};

// Local recreation of the staggered text reveal, with stable semantic copy.
export const StaggeredText = ({
  text,
  segmentBy = "chars",
  delay = 35,
  duration = 0.6,
}: StaggeredTextProps) => {
  const reducedMotion = useMotionPreference();
  const lines = text.split("\n");
  const rows = lines.map((line) => splitLine(line, segmentBy));

  return (
    <span className="block">
      <span className="sr-only">{lines.join(" ")}</span>
      <span aria-hidden="true">
        {rows.map((segments, rowIndex) => {
          const offset = rows
            .slice(0, rowIndex)
            .reduce((total, row) => total + row.length, 0);

          return (
            // Row positions remain stable for the supplied headline.
            // oxlint-disable-next-line react/no-array-index-key
            <span className="block whitespace-nowrap" key={rowIndex}>
              {segments.map((segment, index) => (
                // Repeated letters need a positional key within each row.
                // oxlint-disable-next-line react/no-array-index-key
                <span
                  className="inline-block align-top whitespace-pre"
                  key={index}
                >
                  <motion.span
                    className="inline-block motion-reduce:transform-none! motion-reduce:opacity-100! motion-reduce:filter-none!"
                    data-stagger-segment=""
                    initial={
                      reducedMotion
                        ? false
                        : { opacity: 0, y: "-0.3em", filter: "blur(12px)" }
                    }
                    animate={{
                      opacity: 1,
                      y: "0%",
                      filter: "blur(0px)",
                      transitionEnd: { filter: "none" },
                    }}
                    transition={{
                      duration: reducedMotion ? 0 : duration,
                      delay: reducedMotion
                        ? 0
                        : 0.15 + ((offset + index) * delay) / 1000,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {segment}
                  </motion.span>
                </span>
              ))}
            </span>
          );
        })}
      </span>
    </span>
  );
};
