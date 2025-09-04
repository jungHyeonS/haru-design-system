"use client";

import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import type { DefaultComponentSize } from "../../types/common";



export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  size?: DefaultComponentSize;
  width?: number | string;
  height?: number | string;
}

function getSizeClasses(size: DefaultComponentSize): string {
  switch (size) {
    case "sm":
      return "h-32 p-4";
    case "lg":
      return "h-48 p-6";
    case "md":
    default:
      return "h-40 p-5";
  }
}

function getPaddingClasses(size: DefaultComponentSize): string {
  switch (size) {
    case "sm":
      return "p-4";
    case "lg":
      return "p-6";
    case "md":
    default:
      return "p-5";
  }
}

function toCssLength(value?: number | string): string | undefined {
  if (value === undefined) return undefined;
  return typeof value === "number" ? `${value}px` : value;
}

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { size = "md", width, height, className = "", style, children, ...rest },
  ref
) {
  // `border border-line-default rounded-lg p-4 shadow-md ${
  //       size ? `h-${size}` : ''
  //     }`
  return (
    <div
      ref={ref}
      className={twMerge(
        "border border-line-default rounded-lg shadow-[var(--shadow-md)] bg-white",
        width != null || height != null
          ? getPaddingClasses(size)
          : getSizeClasses(size),
        className
      )}
      style={{
        width: toCssLength(width),
        height: toCssLength(height),
        ...(style as CSSProperties),
      }}
      {...rest}
    >
      {children}
    </div>
  );
});
export default Card;
