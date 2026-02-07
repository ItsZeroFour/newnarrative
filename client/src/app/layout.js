import "../styles/index.scss";
import Header from "../components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "New Narrative",
  description:
    "Разрабатываем игровые механики для маркетинга, HR и продуктовых команд. 50+ реализованных проектов с геймификацией. Спецпроекты, мини-игры, TG Mini Apps и VK приложения.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
