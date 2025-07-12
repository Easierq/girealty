"use client";

import { Sun, Moon, MoonIcon } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useThemeToggle } from "@/components/theme/useToggle";

import { cn } from "@/lib/utils";
import { MunIcon } from "@/app/(main)/icons";

export function ThemeToggle({ className, ...props }: ButtonProps) {
  const { isDark, toggle, hydrated } = useThemeToggle();

  // TODO: fix layout shift from hydration
  if (!hydrated) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("text-2xl rounded-full mr-[6px]", className)}
      // title="Toggle theme"
      // aria-label="Toggle theme"
      {...props}
      onClick={toggle}
    >
      {isDark ? (
        <Sun className="size-[1em] text-slate-100" />
      ) : (
        // <Moon className="size-[1em] fill-current text-slate-500" />
        <div className="p-1 rounded-full bg-purple-100">
          <MoonIcon className="size-[1em] fill-current text-purple-950" />
        </div>
      )}
    </Button>
  );
}
