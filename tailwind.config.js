/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "hsl(var(--bg-base))",
        surface: "hsl(var(--bg-surface))",
        elevated: "hsl(var(--bg-elevated))",
        subtle: "hsl(var(--bg-subtle))",
        "border-default": "hsl(var(--border-default))",
        "border-subtle": "hsl(var(--border-subtle))",
        "copy-primary": "hsl(var(--text-primary))",
        "copy-secondary": "hsl(var(--text-secondary))",
        "copy-muted": "hsl(var(--text-muted))",
        "copy-faint": "hsl(var(--text-faint))",
        brand: "hsl(var(--accent-primary))",
        "brand-dim": "hsl(var(--accent-primary-dim))",
        "accent-ai": "hsl(var(--accent-ai))",
        "accent-ai-text": "hsl(var(--accent-ai-text))",
        error: "hsl(var(--state-error))",
        success: "hsl(var(--state-success))",
        warning: "hsl(var(--state-warning))",
      },
      borderColor: {
        default: "hsl(var(--border-default))",
        subtle: "hsl(var(--border-subtle))",
        surface: "hsl(var(--border-default))",
      },
      textColor: {
        primary: "hsl(var(--text-primary))",
        secondary: "hsl(var(--text-secondary))",
        muted: "hsl(var(--text-muted))",
        faint: "hsl(var(--text-faint))",
        brand: "hsl(var(--accent-primary))",
      },
      borderRadius: {
        xl: "var(--radius-sm, 12px)",
        "2xl": "var(--radius-md, 16px)",
        "3xl": "var(--radius-lg, 20px)",
      },
    },
  },
  plugins: [],
};
