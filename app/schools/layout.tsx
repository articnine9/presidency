import { Navigation } from "@/app/components/Navigation";
import { FooterSection } from "@/app/components//Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        {/* PAGE CONTENT */}
        <main className="bg-white">{children}</main>
      </body>
    </html>
  );
}
