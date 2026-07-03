import { Inter } from "next/font/google";
import { GlobalFooter } from "@/components/layout/global-footer";
import { GlobalNavigation } from "@/components/layout/global-navigation";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { defaultMetadata, defaultViewport } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = defaultMetadata;
export const viewport = defaultViewport;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col antialiased">
        <ThemeProvider>
          <GlobalNavigation />
          {children}
          <GlobalFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
