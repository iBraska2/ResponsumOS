// src/app/layout.tsx
import "../styles/globals.css"; 

export const metadata = {
  title: "Responsum",
  description: "Dein Blog mit Sanity & Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
