import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  author?: string;
  keywords?: string;
  viewport?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Saman",
  description = "Your ultimate e-commerce destination for everything you need!",
  author = "Safal Lama",
  keywords = "e-commerce, online shopping, Saman, fashion, electronics, deals",
  viewport = "width=device-width, initial-scale=1.0",
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content={viewport} />
      </Helmet>
      <Header />
      <main className="flex-grow min-h-[80vh]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
