const posts = [
  {
    title: "Exploring the Hidden Waterfalls of the Pacific Northwest",
    slug: "hidden-waterfalls-pacific-northwest",
    content:
      "A travelogue uncovering the most breathtaking and lesser-known waterfalls tucked away in the lush forests of the Pacific Northwest.",
  },
  {
    title: "The Art of Brewing the Perfect Cup of Coffee",
    slug: "brewing-perfect-coffee",
    content:
      "From bean selection to water temperature, learn the craft of making coffee that's rich, aromatic, and unforgettable.",
  },
  {
    title: "A Beginner’s Guide to Urban Gardening",
    slug: "beginner-urban-gardening",
    content:
      "Turn your balcony or rooftop into a green oasis with these simple, sustainable urban gardening tips.",
  },
  {
    title: "How to Survive Your First Solo Backpacking Trip",
    slug: "first-solo-backpacking-trip",
    content:
      "Solo travel can be daunting but also rewarding. Here’s how to prepare, stay safe, and make the most of the adventure.",
  },
  {
    title: "The Science Behind a Good Night’s Sleep",
    slug: "science-good-nights-sleep",
    content:
      "Discover the biological and environmental factors that influence your sleep quality and how to improve it.",
  },
];

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(posts);
}
