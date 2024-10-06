
import "./globals.css";
import localFont from 'next/font/local'

const maskedMarvelBold = localFont({
  src: "../public/fonts/MaskedMarvelBold.ttf",
  variable: "--marvel-header",
  weight: "400 900",
});

const marvelCursive = localFont({
  src: "../public/fonts/MarvelCursive.otf",
  variable: "--marvel-cursive",
  weight: "400",
});

const avengeRegular = localFont({
  src: "../public/fonts/AvengeRegular2.ttf",
  variable: "--marvel-avenge",
  weight: "400",
});

export const metadata = {
  title: "Marvel Explorer",
  description: "Explore the Marvel Universe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${maskedMarvelBold.variable} ${marvelCursive.variable} ${avengeRegular.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
