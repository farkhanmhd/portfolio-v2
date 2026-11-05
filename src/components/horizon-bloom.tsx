import { motion, useReducedMotion } from "motion/react";
import { useId } from "react";

// A dark planetary silhouette with a softly illuminated horizon.
export const HorizonBloom = () => {
  const id = useId();
  const reducedMotion = useReducedMotion();
  const gradient = (name: string) => `url(#${id}-${name})`;

  return (
    <div
      aria-hidden="true"
      className="horizon-background pointer-events-none absolute inset-y-0 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        initial={reducedMotion === true ? false : { opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reducedMotion === true ? 0 : 2.4,
          ease: "easeOut",
        }}
      >
        <svg
          className="absolute inset-y-0 left-1/2 h-full w-full min-w-5xl -translate-x-1/2"
          data-horizon-scene=""
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
          focusable="false"
        >
          <defs>
            <linearGradient
              id={`${id}-rim`}
              x1="0"
              y1="0"
              x2="1600"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0"
                className="horizon-cool-stop"
                stopOpacity="0.2"
              />
              <stop
                offset="0.35"
                className="horizon-warm-stop"
                stopOpacity="0.85"
              />
              <stop offset="0.59" className="horizon-rim-stop" />
              <stop
                offset="0.8"
                className="horizon-warm-stop"
                stopOpacity="0.8"
              />
              <stop
                offset="1"
                className="horizon-cool-stop"
                stopOpacity="0.15"
              />
            </linearGradient>
            <linearGradient
              id={`${id}-planet`}
              x1="0"
              y1="700"
              x2="0"
              y2="900"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" className="horizon-planet-stop" />
              <stop offset="1" stopColor="var(--color-black)" />
            </linearGradient>
            <filter
              id={`${id}-soft`}
              filterUnits="userSpaceOnUse"
              x="0"
              y="600"
              width="1600"
              height="300"
            >
              <feGaussianBlur stdDeviation="16" />
            </filter>
            <linearGradient id={`${id}-fade`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="var(--color-white)" stopOpacity="0" />
              <stop offset="0.2" stopColor="var(--color-white)" />
              <stop offset="0.87" stopColor="var(--color-white)" />
              <stop offset="1" stopColor="var(--color-white)" stopOpacity="0" />
            </linearGradient>
            <mask id={`${id}-edges`}>
              <rect width="1600" height="900" fill={gradient("fade")} />
            </mask>
          </defs>
          <g mask={gradient("edges")}>
            <ellipse
              cx="800"
              cy="2200"
              rx="1800"
              ry="1500"
              fill="none"
              className="horizon-cool-stroke"
              strokeWidth="48"
              opacity="0.24"
              filter={gradient("soft")}
            />
            <ellipse
              cx="800"
              cy="2200"
              rx="1800"
              ry="1500"
              fill={gradient("planet")}
            />
            <ellipse
              cx="800"
              cy="2200"
              rx="1800"
              ry="1500"
              fill="none"
              stroke={gradient("rim")}
              strokeWidth="12"
              opacity="0.45"
              filter={gradient("soft")}
            />
            <ellipse
              cx="800"
              cy="2200"
              rx="1800"
              ry="1500"
              fill="none"
              stroke={gradient("rim")}
              strokeWidth="1.6"
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
};
