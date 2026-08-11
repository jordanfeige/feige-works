/**
 * Canonical production origin for Open Graph / link previews.
 * Never a Vercel preview or deployment URL — crawlers should unfurl feigeworks.com.
 */
export const SITE_NAME = "Feige Works";
export const SITE_URL = "https://feigeworks.com";
export const SITE_TAGLINE = "We build products worth using.";
export const SITE_DESCRIPTION =
  "Feige Works is an independent product studio exploring what happens when thoughtful product design meets AI.";

export const OG_IMAGE_PATH = "/opengraph-image";
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;

export const FOUNDER = {
  name: "Jordan Feige",
  role: "Founder",
  linkedin: "https://linkedin.com/in/jordan-feige",
  email: "hello@feigeworks.com",
} as const;

export type ProductStatus = "in-beta" | "building" | "testing";

export type Product = {
  id: "driveway" | "playvia" | "wandrai";
  name: string;
  category: string;
  description: string;
  detail: string;
  href: string;
  cta: string;
  status: ProductStatus;
  statusLabel: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "driveway",
    name: "Driveway",
    category: "Real estate · Neighborhood intelligence",
    description: "Turn a listing into a neighborhood story.",
    detail:
      "Give buyers something they can't get from the MLS: real perspectives from people who live nearby.",
    href: "https://driveway.studio",
    cta: "Explore Driveway →",
    status: "in-beta",
    statusLabel: "In beta",
  },
  {
    id: "playvia",
    name: "Playvia",
    category: "Sports · AI practice intelligence",
    description: "Turn practice into actionable intelligence.",
    detail:
      "Analyze practice video, understand what happened, and help athletes and coaches improve.",
    href: "https://playvia.studio",
    cta: "Explore Playvia →",
    status: "building",
    statusLabel: "Building",
  },
  {
    id: "wandrai",
    name: "WandrAI",
    category: "Travel · AI planning",
    description: "Make travel easier to explore, plan, and experience.",
    detail: "More smiles. Less planning. Real places, planned for you.",
    href: "https://wandrai.studio",
    cta: "Explore WandrAI →",
    status: "testing",
    statusLabel: "Testing",
  },
];
