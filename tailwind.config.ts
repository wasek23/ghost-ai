import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background colors
        base: "var(--color-bg-base)",
        surface: "var(--color-bg-surface)",
        elevated: "var(--color-bg-elevated)",
        subtle: "var(--color-bg-subtle)",
        // Border colors
        "border-default": "var(--color-border-default)",
        "border-subtle": "var(--color-border-subtle)",
        // Text colors
        "copy-primary": "var(--color-text-primary)",
        "copy-secondary": "var(--color-text-secondary)",
        "copy-muted": "var(--color-text-muted)",
        "copy-faint": "var(--color-text-faint)",
        // Accent colors
        brand: "var(--color-accent-primary)",
        "brand-dim": "var(--color-accent-primary-dim)",
        "accent-ai": "var(--color-accent-ai)",
        "accent-ai-text": "var(--color-accent-ai-text)",
        // State colors
        error: "var(--color-state-error)",
        success: "var(--color-state-success)",
        warning: "var(--color-state-warning)",
      },
      borderColor: {
        default: "var(--color-border-default)",
        subtle: "var(--color-border-subtle)",
        surface: "var(--color-border-default)",
      },
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        muted: "var(--color-text-muted)",
        faint: "var(--color-text-faint)",
        brand: "var(--color-accent-primary)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
