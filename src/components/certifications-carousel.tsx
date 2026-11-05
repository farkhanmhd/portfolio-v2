import { Link } from "@tanstack/react-router";
import { cn } from "cn";

import { buttonVariants } from "./ui/button-variants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface Certification {
  description: string;
  issuer: string;
  period: string;
  title: string;
}

export const CertificationsCarousel = ({
  items,
}: {
  items: Certification[];
}) => (
  <Carousel
    aria-labelledby="certifications-title"
    className="max-phone:mt-8 mt-12"
    opts={{ align: "start" }}
  >
    <CarouselContent>
      {items.map((cert, index) => (
        <CarouselItem
          aria-label={`${index + 1} of ${items.length}`}
          className="lg:basis-1/2"
          key={cert.title}
        >
          <Card
            className="aspect-video w-full max-lg:min-h-72"
            variant="outline"
          >
            <CardHeader>
              <CardDescription>{cert.issuer}</CardDescription>
              <CardTitle>{cert.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{cert.description}</CardDescription>
            </CardContent>
            <CardFooter className="mt-auto">{cert.period}</CardFooter>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
      <Link
        className={cn(
          buttonVariants({ variant: "outline" }),
          "min-h-11 cursor-pointer rounded-full px-4"
        )}
        to="/certificates"
      >
        View full certificate archive
      </Link>
      <div className="ml-auto flex gap-2">
        <CarouselPrevious className="static m-0 size-11 cursor-pointer" />
        <CarouselNext className="static m-0 size-11 cursor-pointer" />
      </div>
    </div>
  </Carousel>
);
