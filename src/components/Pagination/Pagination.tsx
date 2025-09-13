"use client";

import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
  disabled?: boolean;
}

const HaruPagination = forwardRef<HTMLDivElement, PaginationProps>(
  function HaruPagination(
    {
      currentPage,
      totalPages,
      onPageChange,
      className = "",
      showPrevNext = true,
      maxVisiblePages = 5,
      disabled = false,
    },
    ref
  ) {
    const generatePageNumbers = () => {
      const pages: (number | string)[] = [];
      const halfVisible = Math.floor(maxVisiblePages / 2);

      let startPage = Math.max(1, currentPage - halfVisible);
      let endPage = Math.min(totalPages, currentPage + halfVisible);

      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) {
          pages.push("...");
        }
      }

      // 중간 페이지들 추가
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push("...");
        }
        pages.push(totalPages);
      }

      return pages;
    };

    const pageNumbers = generatePageNumbers();
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const baseClasses = "flex items-center justify-center gap-2 cursor-pointer";
    const buttonClasses =
      "cursor-pointer flex items-center justify-center min-w-[32px] h-8 px-3 text-sm font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed";
    const activePageClasses =
      "cursor-pointer bg-transparent  border border-[var(--color-line-default)] hover:bg-muted";
    const inactivePageClasses = "cursor-pointer hover:bg-muted";
    const prevNextClasses =
      "cursor-pointer flex items-center gap-1 px-3 py-2 text-sm font-medium  hover:text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed";

    return (
      <div ref={ref} className={twMerge(baseClasses, className)}>
        {showPrevNext && (
          <button
            onClick={() =>
              !disabled && !isFirstPage && onPageChange(currentPage - 1)
            }
            disabled={disabled || isFirstPage}
            className={prevNextClasses}
          >
            <ChevronLeftIcon />
          </button>
        )}

        <div className="flex items-center gap-1">
          {pageNumbers.map((page, index) => {
            if (page === "...") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="px-2 text-[var(--color-muted-foreground)]"
                >
                  ...
                </span>
              );
            }

            const pageNum = page as number;
            const isActive = pageNum === currentPage;

            return (
              <button
                key={pageNum}
                onClick={() => !disabled && onPageChange(pageNum)}
                disabled={disabled}
                className={twMerge(
                  buttonClasses,
                  isActive ? activePageClasses : inactivePageClasses
                )}
              >
                {pageNum}
              </button>
            );
          })}
        </div>

        {showPrevNext && (
          <button
            onClick={() =>
              !disabled && !isLastPage && onPageChange(currentPage + 1)
            }
            disabled={disabled || isLastPage}
            className={prevNextClasses}
          >
            <ChevronRightIcon />
          </button>
        )}
      </div>
    );
  }
);

export default HaruPagination;

const ChevronLeftIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);
