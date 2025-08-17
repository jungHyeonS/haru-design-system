import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import type { SidebarMenuItem } from "../../types/common";
import CollapsibleSection from "./CollapsibleSection";

export interface MenuItemProps {
  item: SidebarMenuItem;
  level?: number;
  onItemClick?: (item: SidebarMenuItem) => void;
  isIconMode?: boolean;
}

const MenuItem = ({
  item,
  level = 0,
  onItemClick,
  isIconMode = false,
}: MenuItemProps) => {
  const isSubItem = level > 0;
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = () => {
    if (onItemClick) {
      onItemClick(item);
    }
    if (item.onClick) {
      item.onClick();
    }
  };

  const baseClasses = twMerge(
    "inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:text-accent-foreground py-2 has-[>svg]:px-3 w-full rounded-lg transition-colors mb-1",
    isIconMode ? "justify-center h-11 px-2" : "justify-start h-11 px-3"
  );

  const activeClasses = item.isActive
    ? "bg-primary/10 text-primary border border-primary/20"
    : "hover:bg-accent text-foreground";

  const marginClasses = isSubItem && !isIconMode ? "ml-4" : "";

  if (hasChildren && !isIconMode) {
    return (
      <CollapsibleSection
        title={item.label}
        icon={item.icon}
        defaultOpen={item.isActive}
      >
        {item.children?.map((child) => (
          <MenuItem
            key={child.id}
            item={child}
            level={level + 1}
            onItemClick={onItemClick}
            isIconMode={isIconMode}
          />
        ))}
      </CollapsibleSection>
    );
  }

  return (
    <motion.button
      className={twMerge(baseClasses, activeClasses, marginClasses)}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      title={isIconMode ? item.label : undefined}
    >
      <div className="flex items-center gap-3 w-full">
        {item.icon && (
          <motion.div
            animate={{
              marginRight: isIconMode ? 0 : undefined,
            }}
            transition={{ duration: 0.3 }}
          >
            {item.icon}
          </motion.div>
        )}

        <AnimatePresence>
          {!isIconMode && (
            <motion.span
              className="text-sm font-medium flex-1 text-left"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.label}
            </motion.span>
          )}
        </AnimatePresence>

        {item.badge && !isIconMode && (
          <AnimatePresence>
            <motion.span
              className={twMerge(
                "inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap shrink-0 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden text-xs px-2 py-0.5",
                item.badge.variant === "primary"
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-transparent bg-secondary text-secondary-foreground"
              )}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.badge.text}
            </motion.span>
          </AnimatePresence>
        )}
      </div>
    </motion.button>
  );
};

export default MenuItem;
