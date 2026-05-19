import { wargamesDummy } from "../data/WargamesDummy";

export function getAllWargames() {
  return wargamesDummy;
}

export function getWargameBySlug(slug) {
  return wargamesDummy.find((wargame) => wargame.slug === slug);
}

export function getWargameCategories() {
  return ["All", ...new Set(wargamesDummy.map((wargame) => wargame.category))];
}

export function getWargameStatuses() {
  return ["All", ...new Set(wargamesDummy.map((wargame) => wargame.status))];
}
