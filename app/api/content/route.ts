const posts = [
  {
    title: "Exploring the Hidden Waterfalls of the Pacific Northwest",
    slug: "hidden-waterfalls-pacific-northwest",
    content:
      "Nestled deep within the moss-covered forests of the Pacific Northwest are waterfalls that remain untouched by the tourist crowds. These hidden cascades, often accessible only by winding trails and unmarked paths, offer a rare serenity that feels worlds away from bustling city life. The roar of the falling water blends with the whisper of wind through ancient cedars, creating a symphony that invites you to slow down, breathe deeply, and truly connect with nature.",
  },
  {
    title: "The Art of Brewing the Perfect Cup of Coffee",
    slug: "brewing-perfect-coffee",
    content:
      "Coffee brewing is as much a science as it is an art. From selecting beans at their peak freshness to grinding them to the perfect consistency, every step influences the final flavor. The water temperature must be just right—hot enough to extract the richness of the coffee’s oils but not so hot that it burns the grounds. Whether you prefer a French press, pour-over, or espresso, mastering your technique transforms a daily ritual into a deeply satisfying craft.",
  },
  {
    title: "A Beginner’s Guide to Urban Gardening",
    slug: "beginner-urban-gardening",
    content:
      "Urban gardening offers a way to reconnect with the earth, even in the heart of the city. With just a few pots, some nutrient-rich soil, and a sunny corner of a balcony or rooftop, you can cultivate herbs, vegetables, and flowers. Beyond the fresh produce, tending to plants brings a sense of calm and accomplishment. The gentle rhythm of watering, pruning, and harvesting turns a patch of concrete into a thriving oasis that nourishes both body and mind.",
  },
  {
    title: "How to Survive Your First Solo Backpacking Trip",
    slug: "first-solo-backpacking-trip",
    content:
      "Your first solo backpacking trip is a mix of exhilaration and uncertainty. Preparation is your best friend: pack light, know your route, and carry essential safety gear. Once on the trail, embrace the freedom of moving at your own pace, choosing when to linger and when to press forward. The solitude allows for moments of reflection, and the challenges you overcome—whether it’s navigating a tricky trail or building a fire in the rain—become lasting stories of resilience.",
  },
  {
    title: "The Science Behind a Good Night’s Sleep",
    slug: "science-good-nights-sleep",
    content:
      "Sleep is a complex biological process that restores both mind and body. During deep sleep stages, the body repairs tissues, strengthens the immune system, and consolidates memories. Environmental factors—like light exposure, temperature, and noise—play a significant role in sleep quality. By maintaining a consistent schedule, limiting screen time before bed, and creating a calming nighttime routine, you can align your body’s natural rhythms and wake up feeling truly refreshed.",
  },
];

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession();
  return NextResponse.json(posts);
}
