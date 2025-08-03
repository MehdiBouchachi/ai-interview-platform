import React, { ReactNode } from "react";
import NavBar from "../_components/ui/NavBar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="root-layout">
      <NavBar />
      {children}
    </div>
  );
}
