import { ReactNode } from "react";
import Navbar from "../Navigation/Navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="">
      <div id="site-border-left"></div>
      <div id="site-border-right"></div>
      <div id="site-border-top"></div>
      <div id="site-border-bottom"></div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
