export const TEMPLATE_CATEGORIES = {
  banner: {
    name: "Banners",
    count: 6,
    description: "Professional banners for events, promotions, and business needs"
  },
  leaflet: {
    name: "Leaflets", 
    count: 4,
    description: "Informational leaflets for marketing and communication"
  },
  poster: {
    name: "Posters",
    count: 4, 
    description: "Eye-catching posters for events, movies, and announcements"
  }
} as const;

export const DESIGN_SIZES = {
  standard: { name: "Standard", dimensions: "11\" x 17\"" },
  large: { name: "Large", dimensions: "18\" x 24\"" },
  small: { name: "Small", dimensions: "8.5\" x 11\"" },
  custom: { name: "Custom", dimensions: "Custom Size" },
} as const;

export const COLOR_PREFERENCES = {
  auto: "Let AI decide",
  bright: "Bright & Colorful", 
  professional: "Professional & Clean",
  dark: "Dark & Bold",
  warm: "Warm & Friendly",
} as const;

export const FONT_OPTIONS = [
  "Inter",
  "Roboto", 
  "Open Sans",
  "Playfair Display",
  "Montserrat",
  "Lora",
  "Poppins",
  "Nunito Sans"
] as const;
