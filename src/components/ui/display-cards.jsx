"use client";

import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500"
}) {
  return (
    <div
      className={cn(
        "relative flex h-48 w-[28rem] select-none flex-col justify-between rounded-xl border-2 bg-white shadow-lg px-8 py-6 transition-all duration-700 hover:border-blue-300 hover:shadow-xl cursor-pointer [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-blue-800 p-1">
          {icon}
        </span>
        <p className={cn("text-lg font-medium leading-tight", titleClassName)}>{title}</p>
      </div>
      <p className="text-base leading-relaxed text-gray-700">{description}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
}

export default function DisplayCards({ cards }) {
  const defaultCards = [
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "Choose Your Therapist",
      description: "Select from our curated list of professionals",
      date: "Available now",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className:
        "[grid-area:stack] hover:-translate-y-28",
    },
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "Expert Psychologists",
      description: "Licensed professionals",
      date: "Top rated",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className:
        "[grid-area:stack] translate-x-12 translate-y-15 hover:-translate-y-14",
    },
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "Friendly Malayali Psychologists",
      description: "Connect in your language",
      date: "Cultural comfort",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className:
        "[grid-area:stack] translate-x-24 translate-y-30",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}