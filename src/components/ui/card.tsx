import { cn } from "cn";
import type { ComponentProps } from "react";

const Card = ({
  className,
  size = "default",
  variant = "default",
  ...props
}: ComponentProps<"div"> & {
  size?: "default" | "sm";
  variant?: "default" | "outline";
}) => (
  <div
    data-slot="card"
    data-size={size}
    data-variant={variant}
    className={cn(
      "group/card bg-card text-card-foreground ring-foreground/10 flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl py-(--card-spacing) text-sm ring-1 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
      variant === "outline" && "border bg-black ring-0",
      className
    )}
    {...props}
  />
);

const CardHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="card-header"
    className={cn(
      "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
      className
    )}
    {...props}
  />
);

const CardTitle = ({ className, children, ...props }: ComponentProps<"h3">) => (
  <h3
    data-slot="card-title"
    className={cn(
      "font-heading text-2xl leading-snug font-medium group-data-[size=sm]/card:text-sm",
      className
    )}
    {...props}
  >
    {children}
  </h3>
);

const CardDescription = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="card-description"
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
);

const CardAction = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="card-action"
    className={cn(
      "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
      className
    )}
    {...props}
  />
);

const CardContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="card-content"
    className={cn("px-(--card-spacing)", className)}
    {...props}
  />
);

const CardFooter = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="card-footer"
    className={cn(
      "bg-muted/50 flex items-center rounded-b-xl border-t p-(--card-spacing) group-data-[variant=outline]/card:border-0 group-data-[variant=outline]/card:bg-black",
      className
    )}
    {...props}
  />
);

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
