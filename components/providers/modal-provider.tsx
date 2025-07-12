"use client";

import { useEffect, useState } from "react";

import { LoginButton } from "@/app/(main)/_components/login-button";
import { RegisterButton } from "@/app/(main)/_components/register-button";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <LoginButton />
      <RegisterButton />
    </>
  );
};
