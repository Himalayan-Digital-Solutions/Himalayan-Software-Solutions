export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#0F172A",
        background: "#020617",
        surface: "#111827",
        accent: "#38BDF8",
        success: "#22C55E",
        text: "#FFFFFF",
        muted: "#94A3B8",
        borderColor: "rgba(255,255,255,.08)"
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
