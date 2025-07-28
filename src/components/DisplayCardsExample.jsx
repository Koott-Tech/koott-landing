"use client";

import DisplayCards from "@/components/ui/display-cards";
import { Heart, Star, Zap } from "lucide-react";

export default function DisplayCardsExample() {
  const customCards = [
    {
      icon: <Heart className="size-4 text-red-300" />,
      title: "Mental Wellness",
      description: "Professional therapy sessions",
      date: "Available now",
      iconClassName: "text-red-500",
      titleClassName: "text-red-500",
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Star className="size-4 text-yellow-300" />,
      title: "Expert Therapists",
      description: "Malayali psychologists",
      date: "Top rated",
      iconClassName: "text-yellow-500",
      titleClassName: "text-yellow-500",
      className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Zap className="size-4 text-blue-300" />,
      title: "Quick Booking",
      description: "Instant appointment booking",
      date: "24/7 available",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
        <DisplayCards cards={customCards} />
      </div>
    </div>
  );
} 