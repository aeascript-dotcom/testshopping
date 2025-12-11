import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        factory: {
          orange: '#FF6B35',
          steel: '#4A5568',
          concrete: '#E2E8F0',
          warning: '#F59E0B',
          success: '#10B981',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-thai)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'counter': 'counter 1s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        counter: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
