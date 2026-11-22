import type { MetadataRoute } from "next";

const BASE_URL = "https://www.littleflowerrajgarh.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/academics",
    "/admissions",
    "/contact",
    "/events",
    "/gallery",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}