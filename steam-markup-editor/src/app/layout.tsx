import type { Metadata } from "next";
// import StoreProvider from './storeProvider';
import {Wrapper} from "@/app/wrapper";
import "@/app/assets/css/style.css";

export const metadata: Metadata = {
  title: "Steam Markup Editor",
  description: "Легкий редактор форматированного текста, который позволяет форматировать текст с помощью пользовательских тегов разметки Steam, обеспечивая предварительный просмотр отформатированного содержимого в режиме реального времени.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
