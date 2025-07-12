"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterButton } from "./register-button";
import { useModal } from "@/hooks/use-modal";
import Image from "next/image";

export function LoginButton() {
  const { isOpen, id, onClose, onOpen } = useModal();
  const isModalOpen = isOpen && id === "login";

  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop) {
    return (
      <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className="sm:w-[400px] sm:max-w-[640px] h-auto text-slate-800 px-[4%] rounded-[8px]">
          <DialogHeader className="pl-0">
            <DialogTitle className="text-gray-800">Get Started</DialogTitle>
            <DialogDescription>
              Log in with your credentials to get started
            </DialogDescription>
          </DialogHeader>
          <ProfileForm onOpen={onOpen} onClose={onClose} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isModalOpen} onOpenChange={onClose}>
      <DrawerContent className="px-[5%]">
        <DrawerHeader className="text-left pl-0">
          <DrawerTitle className="text-gray-800">Get Started</DrawerTitle>
          <DrawerDescription>
            Log in with your credentials to get started
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm onOpen={onOpen} onClose={onClose} />
        <DrawerFooter className="pt-3">
          <DrawerClose asChild>
            <Button className="bg-slate-900 text-white hover:text-white font-semibold rounded-[8px] hover:bg-slate-800">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({
  onOpen,
  onClose,
}: {
  onOpen: (id?: string) => void;
  onClose: () => void;
}) {
  return (
    <form>
      <div className="grid gap-6">
        <div className="flex flex-col gap-4">
          <Button
            variant="outline"
            className="w-full rounded-[6px] border-2 border-slate-300 font-semibold"
          >
            <Image
              src="/google.png"
              alt="google-img"
              width={14}
              height={14}
              className="mr-1 h-[14px] w-[14px]"
            />
            Login with Google
          </Button>
        </div>
        <div className="relative text-center text-[12px] after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-white text-sky-700 font-semibold px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email" className="font-semibold">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              className="rounded-[8px] border-slate-400"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password" className="font-semibold">
                Password
              </Label>
              <a
                href="#"
                className="ml-auto text-[12px] underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              className="rounded-[8px] border-slate-400"
              required
            />
          </div>
          <Button
            type="submit"
            variant="primary"
            className="w-full font-semibold text-white rounded-[6px]"
          >
            Login
          </Button>
        </div>
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <p
            onClick={() => {
              onClose(), onOpen("reg");
            }}
            className="underline underline-offset-4 cursor-pointer"
          >
            Sign up
          </p>
          {/* <RegisterButton /> */}
        </div>
      </div>
    </form>
  );
}
