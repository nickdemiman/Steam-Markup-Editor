import type { Metadata } from "next";
// import StoreProvider from './storeProvider';
import {Wrapper} from "@/app/wrapper";
import "@/app/assets/css/style.css";

export const metadata: Metadata = {
  title: "Steam Markup Editor",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
