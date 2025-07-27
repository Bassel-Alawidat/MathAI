// Adapted and enhanced from https://equk.co.uk/2023/02/02/generating-slug-from-title-in-astro/
// Supports Arabic characters + configurable fallback

import { GENERATE_SLUG_FROM_TITLE } from '../config';

/**
 * Generates a URL-friendly slug.
 * @param title - The post title (can be in Arabic or English).
 * @param staticSlug - Optional fallback slug (used when config disables title-based slugs).
 * @returns A valid slug string for routing.
 */
export default function createSlug(title: string, staticSlug: string): string {
  if (!GENERATE_SLUG_FROM_TITLE) return staticSlug;

  return title
    .trim()
    .toLowerCase()
    // Replace spaces and underscores with hyphens
    .replace(/[\s_]+/g, '-')
    // Allow a-z, 0-9, dash, and Arabic unicode range
    .replace(/[^\w\u0600-\u06FF-]/g, '')
    // Remove multiple consecutive dashes
    .replace(/--+/g, '-')
    // Remove leading/trailing dashes
    .replace(/^-+|-+$/g, '');
}
