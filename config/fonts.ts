import { Fira_Code as FontMono, Inter as FontSans, Roboto } from "next/font/google";
import { Lexend } from "next/font/google";

export const fontLexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const fontRoboto = Roboto({
  // weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
