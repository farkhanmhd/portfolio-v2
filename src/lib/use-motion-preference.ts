import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

const subscribe = (onChange: () => void) => {
  const preference = window.matchMedia(QUERY);
  preference.addEventListener("change", onChange);

  return () => {
    preference.removeEventListener("change", onChange);
  };
};

const getSnapshot = () => window.matchMedia(QUERY).matches;

export const useMotionPreference = () =>
  useSyncExternalStore(subscribe, getSnapshot, () => true);
