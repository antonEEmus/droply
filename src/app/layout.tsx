import type { Metadata } from "next";
import { Providers } from "../Providers";
import "../../globals.css";
import { ThemeSwitch } from "../components/ThemeSwitch";
import { UserMenu } from "../components/UserMenu";
import { Trademark } from "../components/Trademark";
import { HomeLink } from "../components/HomeLink";

export const metadata: Metadata = {
  title: "Droply",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Providers>
          {/* Wrap */}
          <div className="w-screen h-screen box-border flex flex-col">
            {/* Header */}
            <header className="w-full h-md flex p-2 gap-2 justify-around">
              <HomeLink />
              <UserMenu />
            </header>
            {/* Content */}
            {children}
            {/* Footer */}
            <footer className="w-full h-md flex p-2 gap-2 justify-between items-center">
              <Trademark />
              <ThemeSwitch />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
