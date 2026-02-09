import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Transaction-Driven Database System for SME Inventory Operations",
  description: "Academic Research Project on Inventory Management Systems for Nigerian SMEs",
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
