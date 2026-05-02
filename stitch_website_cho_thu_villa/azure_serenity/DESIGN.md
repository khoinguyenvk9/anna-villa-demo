---
name: Azure Serenity
colors:
  surface: '#f9f9fc'
  surface-dim: '#dadadc'
  surface-bright: '#f9f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f6'
  surface-container: '#eeeef0'
  surface-container-high: '#e8e8ea'
  surface-container-highest: '#e2e2e5'
  on-surface: '#1a1c1e'
  on-surface-variant: '#3e4850'
  inverse-surface: '#2f3133'
  inverse-on-surface: '#f0f0f3'
  outline: '#6e7881'
  outline-variant: '#bdc8d1'
  surface-tint: '#00658d'
  primary: '#00658d'
  on-primary: '#ffffff'
  primary-container: '#00aeef'
  on-primary-container: '#003e58'
  inverse-primary: '#82cfff'
  secondary: '#255dad'
  on-secondary: '#ffffff'
  secondary-container: '#79a9fd'
  on-secondary-container: '#003c7e'
  tertiary: '#595f64'
  on-tertiary: '#ffffff'
  tertiary-container: '#9ea3a9'
  on-tertiary-container: '#343a3e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c6e7ff'
  primary-fixed-dim: '#82cfff'
  on-primary-fixed: '#001e2d'
  on-primary-fixed-variant: '#004c6b'
  secondary-fixed: '#d7e2ff'
  secondary-fixed-dim: '#abc7ff'
  on-secondary-fixed: '#001b3f'
  on-secondary-fixed-variant: '#00458f'
  tertiary-fixed: '#dee3e9'
  tertiary-fixed-dim: '#c2c7cd'
  on-tertiary-fixed: '#171c21'
  on-tertiary-fixed-variant: '#42474c'
  background: '#f9f9fc'
  on-background: '#1a1c1e'
  surface-variant: '#e2e2e5'
typography:
  display-xl:
    fontFamily: notoSerif
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: notoSerif
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-md:
    fontFamily: notoSerif
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: plusJakartaSans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: plusJakartaSans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: plusJakartaSans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is crafted to evoke the feeling of a high-end tropical retreat. It targets affluent travelers seeking a seamless, professional, and tranquil booking experience. 

The aesthetic direction is **Modern Minimalism with a Glassmorphic touch**. By utilizing heavy whitespace, high-quality architectural photography, and translucent UI layers, the interface mimics the clarity of tropical waters and the openness of a luxury villa. The tone is sophisticated yet welcoming, ensuring the user feels a sense of calm and exclusivity from the first interaction.

## Colors

The palette is directly inspired by the horizon line where the sky meets the sea.
- **Primary (Sky Blue):** Used for primary actions, active states, and highlighting key features. It represents the vibrant energy of a tropical day.
- **Secondary (Deep Ocean):** Used for grounding elements like typography, navigation bars, and footer backgrounds to provide a professional, authoritative contrast.
- **Tertiary (Mist):** A very light blue tint used for large background sections to prevent the "starkness" of pure white, maintaining a soft, atmospheric feel.
- **Neutral:** A deep charcoal, almost black, reserved for high-readability body text and iconography.

## Typography

The typography strategy pairs the timeless elegance of **Noto Serif** with the contemporary, welcoming geometry of **Plus Jakarta Sans**.

Headlines should be treated with editorial care, using generous leading to allow the "modern luxury" personality to shine. Display styles should prioritize the serif font to evoke a heritage, "villa" feel, while all functional UI elements, labels, and long-form body text use the sans-serif for maximum legibility and a modern, tech-forward touch.

## Layout & Spacing

The layout utilizes a **Fixed Grid** model for desktop to maintain an editorial, magazine-like feel, while transitioning to a fluid model for mobile. 

A 12-column grid is standard, but the "luxury" feel is achieved through intentional asymmetry and "broken" grid elements (e.g., images overlapping text containers). Spacing follows a strict 8px rhythm, but should lean toward the larger end of the scale (e.g., 32px, 48px, 64px) to ensure the UI feels uncrowded and "breathable," much like the open-plan architecture of a luxury villa.

## Elevation & Depth

Hierarchy is established through **Glassmorphism and Ambient Shadows**. 

Instead of traditional grey shadows, this system uses ultra-diffused shadows with a hint of the secondary blue color (#004A99) at very low opacity (5-8%). This creates a "submerged" or "floating" effect rather than a heavy, physical one. Surfaces often use a 60% opacity background with a high-density backdrop blur (20px-30px) to mimic frosted glass or shallow water, allowing the vibrant tropical imagery behind the UI to peek through without sacrificing text legibility.

## Shapes

The shape language is **Rounded (Level 2)**, striking a balance between organic comfort and architectural precision. 

Standard components use a 0.5rem (8px) radius. Larger containers, such as hero cards or image carousels, should use the `rounded-xl` (24px) setting to feel more like "objects" within a space. This softness contrasts against the sharp, clean lines of the typography, echoing the mix of natural tropical foliage and modern villa construction.

## Components

### Buttons
- **Primary:** Solid Primary Blue (#00AEEF) with white text. High contrast, slightly wider horizontal padding for a premium look.
- **Secondary:** Transparent background with a 1px border of the Secondary Blue.
- **Tertiary/Ghost:** No border, blue text, used for low-emphasis actions.

### Cards
Cards are the heart of this system. They should feature full-bleed imagery with a subtle gradient overlay at the bottom to house white text. Use "Glass" overlays for price tags or availability chips pinned to the top-right corner.

### Inputs
Search and date-picker inputs should be large and clean. Use a white background with a very soft Sky Blue inner glow when focused. Icons should be thin-stroke (2pt) to maintain a refined feel.

### Navigation
The header should be a "Sticky Glass" component. As the user scrolls over vibrant photography, the header blurs the content behind it, maintaining the "Azure Serenity" aesthetic while keeping navigation accessible.

### Additional Components
- **Property Amenities Grid:** Icons should be minimalist and monolinear.
- **Image Gallery:** Large-scale masonry layout with soft corner rounding.