import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import HamburgerIcon from "./HamburgerIcon";

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  onMenuClick?: () => void;
  showMenuButton?: boolean;
  isMenuOpen?: boolean;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  variant?: "default" | "sticky" | "floating";
  className?: string;
}

const Header = forwardRef<HTMLDivElement, HeaderProps>(function Header(
  {
    title = "대시보드",
    subtitle,
    onMenuClick,
    showMenuButton = true,
    isMenuOpen = false,
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
    <motion.header
      ref={ref}
      className={headerClasses}
      style={style}
      id={id}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {showMenuButton && (
          <motion.button
            onClick={onMenuClick}
            className="flex items-center justify-center w-10 h-10 rounded-lg transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            <HamburgerIcon isOpen={isMenuOpen} className="text-gray-700" />
          </motion.button>
        )}

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
    </motion.header>
  );
});

export default Header;
