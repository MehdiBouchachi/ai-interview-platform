"use client";

import AuthForm from "./AuthForm";
import FormHeader from "./FormHeader";
import FormFooter from "./FormFooter";

export default function SignInOutForm({
  type,
}: {
  type: "sign-in" | "sign-up";
}) {
  return (
    <div className="card-border lg:min-w-[556px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <FormHeader />
        <AuthForm type={type} />
        <FormFooter type={type} />
      </div>
    </div>
  );
}
