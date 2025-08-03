import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav>
      <Link href={"/"} className="flex items-center gap-2">
        <Image src={"/logo.svg"} alt="Logo" width={38} height={32} />
        <h2>PrepWise</h2>
      </Link>
    </nav>
  );
}
