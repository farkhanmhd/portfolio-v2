import { createContext } from "react";
import type { RefObject } from "react";

export const ScrollViewportContext =
  createContext<RefObject<HTMLDivElement | null> | null>(null);
