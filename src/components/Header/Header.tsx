"use client";

import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface HeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  menuButton?: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  variant?: "default" | "sticky" | "floating";
  className?: string;
}

const HaruHeader = forwardRef<HTMLDivElement, HeaderProps>(function HaruHeader(
  {
    title = "대시보드",
    subtitle,
    menuButton,
    leftContent,
    rightContent,
    variant = "default",
    className = "",
    style,
    id,
  },
  ref
) {
  const headerClasses = twMerge(
    "flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200",
    variant === "sticky" && "sticky top-0 z-40 backdrop-blur-sm bg-white/95",
    variant === "floating" && "mx-4 mt-4 rounded-lg border shadow-sm",
    className
  );

  return (
    <div ref={ref} className={headerClasses} style={style} id={id}>
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {menuButton && menuButton}

        {leftContent ? (
          leftContent
        ) : (
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold text-gray-900 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm text-gray-500 leading-tight">{subtitle}</p>
            )}
          </div>
        )}
      </div>

      {/* Right Section */}
      {rightContent && (
        <div className="flex items-center gap-2">{rightContent}</div>
      )}
    </div>
  );
});

export default HaruHeader;
