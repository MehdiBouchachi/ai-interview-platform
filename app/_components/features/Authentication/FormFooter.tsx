import Link from "next/link";
import React from "react";

export default function FormFooter({ type }: { type: "sign-in" | "sign-up" }) {
  const isSignUp: boolean = type === "sign-up";

  return (
    <p className="text-center">
      {isSignUp ? "Have an account already?, " : "No account yet?, "}
      <Link
        href={isSignUp ? "/sign-in" : "/sign-up"}
        className="font-bold text-user-primary ml-1"
      >
        {isSignUp ? "Sign in" : "Sign up"}
      </Link>
    </p>
  );
}
