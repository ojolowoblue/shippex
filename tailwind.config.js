/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        foreground: "#1F2937",
        sub: "#4B5563",
        "secondary-foreground": "#838282",
        destructive: "#EF4444",
        placeholder: "#6B7280",
        muted: "#6B7280",
        border: "#E5E7EB",
        ring: "#E5E7EB"
      },
      boxShadow: {
        'input': '0px 0px 0px 4px rgba(59, 130, 246, 0.25)',
        'input-error': '0px 0px 0px 4px #f6ccce',
      },
    },
  },
  plugins: [],
}

