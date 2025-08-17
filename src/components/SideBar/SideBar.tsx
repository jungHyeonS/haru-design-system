import React, { forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
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
  isCollapsed?: boolean;
  onCollapseChange?: (collapsed: boolean) => void;
  defaultCollapsed?: boolean;
}

// Toggle button component
const ToggleButton = ({
  isCollapsed,
  onClick,
}: {
  isCollapsed: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="absolute -right-3 top-6 z-10 flex h-6 w-6 items-center justify-center rounded-full border bg-white shadow-sm hover:bg-gray-50 transition-colors"
    aria-label={isCollapsed ? "사이드바 열기" : "사이드바 닫기"}
  >
    <motion.svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: isCollapsed ? 180 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <path d="m15 18-6-6 6-6" />
    </motion.svg>
  </button>
);

const SideBar = forwardRef<HTMLDivElement, SideBarProps>(function SideBar(
  {
    variant = "default",
    collapsible = "none",
    sections = [],
    header,
    footer,
    onMenuItemClick,
    className = "",
    isCollapsed: controlledCollapsed,
    onCollapseChange,
    defaultCollapsed = false,
    style,
    id,
  },
  ref
) {
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);

  // Use controlled state if provided, otherwise use internal state
  const isCollapsed =
    controlledCollapsed !== undefined ? controlledCollapsed : internalCollapsed;

  const handleToggle = () => {
    const newCollapsed = !isCollapsed;
    if (controlledCollapsed === undefined) {
      setInternalCollapsed(newCollapsed);
    }
    onCollapseChange?.(newCollapsed);
  };

  const canCollapse = collapsible !== "none";
  const isIconMode = collapsible === "icon" && isCollapsed;
  const isOffcanvas = collapsible === "offcanvas";

  const sidebarClasses = twMerge(
    "bg-white flex h-full flex-col relative transition-all duration-300",
    variant === "floating" && "border-line-default rounded-lg border shadow-sm",
    isIconMode && "w-16",
    !isIconMode && "w-full",
    className
  );

  const contentClasses = "flex min-h-0 flex-1 flex-col gap-2 overflow-auto";

  // Offcanvas mode - sidebar slides in from left with backdrop
  if (isOffcanvas) {
    return (
      <>
        <AnimatePresence>
          {!isCollapsed && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleToggle}
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              />
              {/* Sidebar */}
              <motion.div
                ref={ref}
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className={twMerge(
                  "fixed left-0 top-0 z-50 h-full w-80",
                  sidebarClasses
                )}
                style={style}
                id={id}
              >
                <SidebarContent
                  sections={sections}
                  header={header}
                  footer={footer}
                  onMenuItemClick={onMenuItemClick}
                  isIconMode={false}
                  contentClasses={contentClasses}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Icon and default modes
  return (
    <motion.div
      ref={ref}
      className={sidebarClasses}
      animate={{ width: isIconMode ? 64 : "auto" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={style}
      id={id}
    >
      {canCollapse && (
        <ToggleButton isCollapsed={isCollapsed} onClick={handleToggle} />
      )}

      <SidebarContent
        sections={sections}
        header={header}
        footer={footer}
        onMenuItemClick={onMenuItemClick}
        isIconMode={isIconMode}
        contentClasses={contentClasses}
      />
    </motion.div>
  );
});

const SidebarContent = ({
  sections,
  header,
  footer,
  onMenuItemClick,
  isIconMode,
  contentClasses,
}: {
  sections: SidebarSection[];
  header?: {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
  };
  footer?: React.ReactNode;
  onMenuItemClick?: (item: SidebarMenuItem) => void;
  isIconMode: boolean;
  contentClasses: string;
}) => (
  <>
    <div className={contentClasses}>
      <div className="h-full flex flex-col">
        {/* Header */}
        {header && (
          <motion.div
            className="p-4 border-b border-line-default"
            animate={{
              opacity: isIconMode ? 0 : 1,
              height: isIconMode ? 0 : "auto",
              padding: isIconMode ? "0 16px" : "16px",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3">
              {header.icon && (
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/20 flex items-center justify-center shadow-sm">
                  {header.icon}
                </div>
              )}
              <AnimatePresence>
                {!isIconMode && (
                  <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h1 className="text-lg font-bold text-foreground">
                      {header.title}
                    </h1>
                    {header.subtitle && (
                      <p className="text-xs text-muted-foreground">
                        {header.subtitle}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* Scrollable content */}
        <div className="relative flex-1">
          <div className="size-full rounded-[inherit] overflow-hidden overflow-y-auto">
            <div style={{ minWidth: "100%", display: "table" }}>
              <div className={isIconMode ? "p-2" : "p-3"}>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <div key={section.id}>
                      {section.title && !isIconMode && (
                        <motion.h3
                          className="px-3 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wide"
                          animate={{ opacity: isIconMode ? 0 : 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {section.title}
                        </motion.h3>
                      )}
                      {section.items.map((item) => (
                        <MenuItem
                          key={item.id}
                          item={item}
                          onItemClick={onMenuItemClick}
                          isIconMode={isIconMode}
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
      <motion.div
        className="border-t border-line-default"
        animate={{
          padding: isIconMode ? "8px" : "16px",
        }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence>
          {!isIconMode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {footer}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    )}
  </>
);

export default SideBar;
