import "@/styles/main.css";
import { M_PLUS_1 } from "next/font/google";

const font = M_PLUS_1({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-m-plus-1",
  style: ["normal"],
});

export const metadata = {
  title: "Fategtic",
  description: "A Fate Core character sheet and dice roller",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${font.variable} px-safe overflow-hidden px-38 pt-42 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
