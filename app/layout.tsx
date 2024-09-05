"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import LayoutContent from "./LayoutContent";
import { Provider } from "react-redux";
import store from "../redux/store";
const inter = Inter({ subsets: ["latin"] });
// export const metadata: Metadata = {
//   title: "Good Food Good Life",
//   description: "Developed by Bhoi hitesh",
// };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Sidebar />
          <AntdRegistry>
            {/* make separate LayoutContent component for accessing redux state before providing it. */}
            <LayoutContent>{children}</LayoutContent>{" "}
            {/* Use the new component */}
          </AntdRegistry>
        </Provider>
      </body>
    </html>
  );
}
