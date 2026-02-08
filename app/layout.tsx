import type { Metadata } from "next";
import "./globals.css";

// Use the optimized URL with w_32 for the standard favicon 
// and w_180 for Apple touch icons.
export const metadata: Metadata = {
  title: "Malik Al Rasyidi | Full Stack Engineer",
  description: "Full Stack Software Engineer specializing in .NET, Node.js, and React.",
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/dxdgpncgq/image/upload/w_32,h_32,c_scale,f_auto,q_auto/v1770555778/logo_malik_btld9n.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://res.cloudinary.com/dxdgpncgq/image/upload/w_16,h_16,c_scale,f_auto,q_auto/v1770555778/logo_malik_btld9n.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://res.cloudinary.com/dxdgpncgq/image/upload/w_180,h_180,c_scale,f_auto,q_auto/v1770555778/logo_malik_btld9n.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}