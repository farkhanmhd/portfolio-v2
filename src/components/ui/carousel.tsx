import { cn } from "cn";
import useEmblaCarousel from "embla-carousel-react";
import type { UseEmblaCarouselType } from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { animate } from "motion/react";
import {
  createContext,
  use,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
} from "react";
import type { ComponentProps, KeyboardEvent } from "react";

import { Button } from "@/components/ui/button";

import { useMotionPreference } from "../../lib/use-motion-preference";

type CarouselApi = UseEmblaCarouselType[1];

type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;

type CarouselOptions = UseCarouselParameters[0];

type CarouselPlugin = UseCarouselParameters[1];

interface CarouselProps {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = createContext<CarouselContextProps | null>(null);

const useCarousel = () => {
  const context = use(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
};

const Carousel = ({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: ComponentProps<"section"> & CarouselProps) => {
  const reducedMotion = useMotionPreference();
  const animation = useRef<{ cancel: () => void } | null>(null);

  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      duration: 0,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  );

  const subscribe = useCallback(
    (onChange: () => void) => {
      api?.on("reInit", onChange);
      api?.on("select", onChange);

      return () => {
        api?.off("reInit", onChange);
        api?.off("select", onChange);
      };
    },
    [api]
  );

  const canScrollPrev = useSyncExternalStore(
    subscribe,
    () => api?.canScrollPrev() ?? false,
    () => false
  );

  const canScrollNext = useSyncExternalStore(
    subscribe,
    () => api?.canScrollNext() ?? false,
    () => false
  );

  const scroll = useCallback(
    (direction: "previous" | "next") => {
      if (!api) {
        return;
      }

      const track = api.containerNode();
      const from = getComputedStyle(track).transform;
      animation.current?.cancel();

      if (direction === "previous") {
        api.scrollPrev(true);
      } else {
        api.scrollNext(true);
      }

      if (!reducedMotion) {
        animation.current = animate(
          track,
          { transform: [from, track.style.transform] },
          {
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }
        );
      }
    },
    [api, reducedMotion]
  );

  const scrollPrev = useCallback(() => {
    scroll("previous");
  }, [scroll]);

  const scrollNext = useCallback(() => {
    scroll("next");
  }, [scroll]);

  useEffect(() => {
    const cancel = () => {
      animation.current?.cancel();
    };

    api?.on("pointerDown", cancel);

    if (reducedMotion) {
      cancel();
    }

    return () => {
      api?.off("pointerDown", cancel);
      cancel();
    };
  }, [api, reducedMotion]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  const context = useMemo(
    () => ({
      carouselRef,
      api,
      opts,
      orientation,
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext,
    }),
    [
      carouselRef,
      api,
      opts,
      orientation,
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext,
    ]
  );

  return (
    <CarouselContext value={context}>
      <section
        onKeyDownCapture={handleKeyDown}
        className={cn("carousel relative", className)}
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </section>
    </CarouselContext>
  );
};

const CarouselContent = ({ className, ...props }: ComponentProps<"div">) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
};

// ARIA carousel slides use group semantics, not form-specific grouping elements.
/* oxlint-disable jsx-a11y/prefer-tag-over-role */
const CarouselItem = ({ className, ...props }: ComponentProps<"div">) => {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
};

/* oxlint-enable jsx-a11y/prefer-tag-over-role */
const CarouselPrevious = ({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: ComponentProps<typeof Button>) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        "absolute touch-manipulation rounded-full",
        orientation === "horizontal"
          ? "inset-y-0 -left-12 my-auto"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeftIcon aria-hidden="true" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
};

const CarouselNext = ({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: ComponentProps<typeof Button>) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        "absolute touch-manipulation rounded-full",
        orientation === "horizontal"
          ? "inset-y-0 -right-12 my-auto"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRightIcon aria-hidden="true" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
};

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
