"use client";

import { useState } from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./page";
import Hex from "./hex/page";
import Rgb from "./rgb/page";

type PageKey = "home" | "rgb" | "hex";

export default function RootLayout() {
  const [currentPage, setCurrentPage] = useState<PageKey>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "rgb":
        return <Rgb />;
      case "hex":
        return <Hex />;
      case "home":
      default:
        return <Home />;
    }
  };

  return (
    <html lang="en" className="h-full">
      <body className="h-full flex flex-col">
        <Header setCurrentPage={setCurrentPage} />
        <main className="flex-grow flex flex-col ">{renderPage()}</main>
        <Footer />
      </body>
    </html>
  );
}