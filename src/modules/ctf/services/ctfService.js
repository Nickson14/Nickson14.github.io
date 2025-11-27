// src/modules/ctf/services/ctfService.js
import { ctfPosts } from "../data/ctfDummyData";

export function getAllCtfs() {
  return ctfPosts;
}

export function getCtfBySlug(slug) {
  return ctfPosts.find((post) => post.slug === slug);
}
