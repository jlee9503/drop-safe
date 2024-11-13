import './globals.css'
import { Overpass } from 'next/font/google'

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: 'DropSafe',
  description: 'Drop, store and share your file',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${overpass.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
