/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface DesignCard {
  id: string;
  indexText: string;
  title: string;
  imageAlt: string;
  tagline?: string;
  cardLogoText: string;
}

export interface Partner {
  id: string;
  name: string;
  iconName: string; // reference name for lucide or custom styled emblem
}

export interface CopyMetadata {
  originalText: string;
  currentText: string;
  characterCount: number;
}

export interface ProductCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  accentColor: string;
  isDark: boolean;
}
