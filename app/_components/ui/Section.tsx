import React, { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return <section className="flex flex-col gap-6 mt-8">{children}</section>;
}
