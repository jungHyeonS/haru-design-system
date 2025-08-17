import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import type {
  SidebarCollapsible,
  SidebarMenuItem,
  SidebarSection,
  SidebarVariant,
} from "../../types/common";
import MenuItem from "./MenuItem";

export interface SideBarProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SidebarVariant;
  collapsible?: SidebarCollapsible;
  sections?: SidebarSection[];
  header?: {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
  };
  footer?: React.ReactNode;
  onMenuItemClick?: (item: SidebarMenuItem) => void;
  className?: string;
}

const SideBar = forwardRef<HTMLDivElement, SideBarProps>(function SideBar(
  {
    variant = "default",
    sections = [],
    header,
    footer,
    onMenuItemClick,
    className = "",
    ...rest
  },
  ref
) {
  const sidebarClasses = twMerge(
    "bg-white flex h-full w-full flex-col",
    variant === "floating" && "border-line-default rounded-lg border shadow-sm",
    className
  );

  const contentClasses = "flex min-h-0 flex-1 flex-col gap-2 overflow-auto";

  return (
    <div ref={ref} className={sidebarClasses} {...rest}>
      <div className={contentClasses}>
        <div className="h-full flex flex-col ">
          {/* Header */}
          {header && (
            <div className="p-4 border-b border-line-default">
              <div className="flex items-center gap-3">
                {header.icon && (
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center shadow-sm">
                    {header.icon}
                  </div>
                )}
                <div className="flex-1">
                  <h1 className="text-lg font-bold text-foreground">
                    {header.title}
                  </h1>
                  {header.subtitle && (
                    <p className="text-xs text-muted-foreground">
                      {header.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Scrollable content */}
          <div className="relative flex-1">
            <div className="size-full rounded-[inherit] overflow-hidden overflow-y-auto">
              <div style={{ minWidth: "100%", display: "table" }}>
                <div className="p-3">
                  <nav className="space-y-1">
                    {sections.map((section) => (
                      <div key={section.id}>
                        {section.title && (
                          <h3 className="px-3 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                            {section.title}
                          </h3>
                        )}
                        {section.items.map((item) => (
                          <MenuItem
                            key={item.id}
                            item={item}
                            onItemClick={onMenuItemClick}
                          />
                        ))}
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {footer && (
        <div className="p-4 border-t border-line-default">{footer}</div>
      )}
    </div>
  );
});

export default SideBar;
