"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import type {
  DefaultComponentSize,
  DefaultComponentVariant,
} from "../../types/common";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: DefaultComponentVariant;
  size?: DefaultComponentSize;
  fullWidth?: boolean;
  loading?: boolean;
}

function getVariantClasses(variant: DefaultComponentVariant): string {
  switch (variant) {
    case "secondary":
      return "bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] hover:bg-[color-mix(in_oklab,var(--color-secondary),black_5%)] border border-[var(--color-border)]";
    case "destructive":
      return "bg-[var(--color-destructive)] text-[var(--color-destructive-foreground)] hover:bg-[color-mix(in_oklab,var(--color-destructive),black_5%)]";
    case "outline":
      return "bg-transparent text-[var(--color-foreground)] border border-[var(--color-border)] hover:bg-[var(--color-muted)]";
    case "ghost":
      return "bg-transparent text-[var(--color-foreground)] hover:bg-[var(--color-muted)]";
    case "primary":
    default:
      return "bg-[var(--color-primary)] text-white hover:bg-[color-mix(in_oklab,var(--color-primary),black_5%)]";
  }
}

function getSizeClasses(size: DefaultComponentSize): string {
  switch (size) {
    case "sm":
      return "h-8 px-3 leading-[var(--leading-normal)] rounded-[var(--radius-sm)]";
    case "lg":
      return "h-12 px-6 leading-[var(--leading-normal)] rounded-[var(--radius-lg)]";
    case "md":
    default:
      return "h-10 px-4 leading-[var(--leading-normal)] rounded-[var(--radius-md)]";
  }
}

const HaruButton = forwardRef<HTMLButtonElement, ButtonProps>(
  function HaruButton(
    {
      className = "",
      variant = "primary",
      size = "md",
      fullWidth = false,
      disabled,
      loading = false,
      children,
      ...rest
    },
    ref
  ) {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-[var(--duration-normal)] ease-[var(--easing-standard)] shadow-[var(--shadow-sm)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] disabled:opacity-50 disabled:cursor-not-allowed";
    const width = fullWidth ? "w-full" : "";
    const spinner = (
      <svg className="animate-spin h-4 w-4 opacity-80" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    );

    return (
      <button
        ref={ref}
        className={twMerge(
          base,
          getVariantClasses(variant),
          getSizeClasses(size),
          width,
          className
        )}
        disabled={disabled || loading}
        {...rest}
      >
        {loading && spinner}
        {children}
      </button>
    );
  }
);

export default HaruButton;
