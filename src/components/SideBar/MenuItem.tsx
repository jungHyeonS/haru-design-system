import { twMerge } from "tailwind-merge";
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
    <button
      className={twMerge(baseClasses, activeClasses, marginClasses)}
      onClick={handleClick}
      title={isIconMode ? item.label : undefined}
    >
      <div className="flex items-center gap-3 w-full">
        {item.icon && <div>{item.icon}</div>}

        {!isIconMode && (
          <span className="text-sm font-medium flex-1 text-left">
            {item.label}
          </span>
        )}

        {item.badge && !isIconMode && (
          <span
            className={twMerge(
              "inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap shrink-0 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden text-xs px-2 py-0.5",
              item.badge.variant === "primary"
                ? "border-transparent bg-primary text-primary-foreground"
                : "border-transparent bg-secondary text-secondary-foreground"
            )}
          >
            {item.badge.text}
          </span>
        )}
      </div>
    </button>
  );
};

export default MenuItem;
