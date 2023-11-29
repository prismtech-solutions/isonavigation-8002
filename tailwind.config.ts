import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        accent: ["var(--font-accent)"],
      },
      colors: {
        p1: "#151515",
        s1: "#DDDDDD",
        s2: "#020202",
        s3: "#444444",
        t1: "#FFFFFF", 
        t2: "#DDDDDD",
        t3: "#505050",
        accent: "#f1f566",
        shadow: "rgba(0, 0, 0, 0)",
      },
    },
  },
  plugins: [],
} satisfies Config;
