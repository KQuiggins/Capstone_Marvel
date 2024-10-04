
import "./globals.css";
import localFont from 'next/font/local'

const maskedMarvelBold = localFont({
  src: "./fonts/maskedMarvelBold.ttf",
  variable: "--marvel-header",
  weight: "400 900",
});

export const metadata = {
  title: "Marvel Explorer",
  description: "Explore the Marvel Universe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${maskedMarvelBold.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
