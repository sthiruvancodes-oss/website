export const CONFIG = {
  // ---------------------------------------------------------------------------
  // Site Settings
  // ---------------------------------------------------------------------------
  site: {
    url: "https://saisonthiru.com",
    locale: "en_AU",
    twitterHandle: "",
  },

  // ---------------------------------------------------------------------------
  // SEO Settings
  // ---------------------------------------------------------------------------
  seo: {
    titleTemplate: "%s | %n", // %s = page title, %n = DATA.name
    twitterCard: "summary_large_image" as const,
    robots: "index, follow",
  },

  // ---------------------------------------------------------------------------
  // Typography
  // ---------------------------------------------------------------------------
  typography: {
    // Base font size as a percentage. 100 = browser default (16px).
    // 110 = 10% larger or 90 = 10% smaller, across all text, headings, and links simultaneously.
    baseFontSize: 115,
  },

  // ---------------------------------------------------------------------------
  // Blog Settings
  // ---------------------------------------------------------------------------
  blog: {
    postsPerPage: 10,
  },

  // ---------------------------------------------------------------------------
  // Font Settings
  // Uses the Apple system stack (-apple-system / SF Pro) defined in global.css.
  // Mono falls back to SF Mono, then Geist Mono Variable.
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // Design Settings
  // 1. Pick a theme at ui.shadcn.com/themes or generate one with a tool like tweakcn.com
  // 2. Copy the CSS variables block
  // 3. Paste into BELOW with the naming conversion already used
  // ---------------------------------------------------------------------------

  theme: {
    radius: "0.875rem",

    light: {
      background: "oklch(0.975 0.002 260)",
      foreground: "oklch(0.18 0.01 260)",
      card: "oklch(1 0 0 / 72%)",
      cardForeground: "oklch(0.18 0.01 260)",
      popover: "oklch(0.99 0.002 260 / 92%)",
      popoverForeground: "oklch(0.18 0.01 260)",
      primary: "oklch(0.22 0.02 260)",
      primaryForeground: "oklch(0.99 0 0)",
      secondary: "oklch(0.94 0.005 260)",
      secondaryForeground: "oklch(0.22 0.02 260)",
      muted: "oklch(0.94 0.005 260)",
      mutedForeground: "oklch(0.45 0.015 260)",
      accent: "oklch(0.94 0.005 260)",
      accentForeground: "oklch(0.22 0.02 260)",
      destructive: "oklch(0.577 0.245 27.325)",
      border: "oklch(0.88 0.01 260)",
      input: "oklch(0.88 0.01 260)",
      ring: "oklch(0.55 0.04 250)",
    },

    dark: {
      background: "oklch(0.14 0.01 260)",
      foreground: "oklch(0.98 0.002 260)",
      card: "oklch(0.2 0.01 260 / 72%)",
      cardForeground: "oklch(0.98 0.002 260)",
      popover: "oklch(0.2 0.01 260 / 92%)",
      popoverForeground: "oklch(0.98 0.002 260)",
      primary: "oklch(0.96 0.002 260)",
      primaryForeground: "oklch(0.18 0.01 260)",
      secondary: "oklch(0.24 0.01 260)",
      secondaryForeground: "oklch(0.98 0.002 260)",
      muted: "oklch(0.24 0.01 260)",
      mutedForeground: "oklch(0.72 0.01 260)",
      accent: "oklch(0.24 0.01 260)",
      accentForeground: "oklch(0.98 0.002 260)",
      destructive: "oklch(0.704 0.191 22.216)",
      border: "oklch(1 0 0 / 12%)",
      input: "oklch(1 0 0 / 14%)",
      ring: "oklch(0.62 0.04 250)",
    },
  },

} as const;
