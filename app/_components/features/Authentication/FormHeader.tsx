import Image from "next/image";
import React from "react";

export default function FormHeader() {
  return (
    <>
      <div className="flex flex-row gap-2 justify-center">
        <Image src={"logo.svg"} alt="logo" height={32} width={38} />
        <h2 className="text-primary-100">PrepWise</h2>
      </div>
      <h3>Practice job interview with AI</h3>
    </>
  );
}
