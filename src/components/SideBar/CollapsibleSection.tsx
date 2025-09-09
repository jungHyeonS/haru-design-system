import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

export interface CollapsibleSectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const CollapsibleSection = ({
  title,
  icon,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:text-accent-foreground py-2 has-[>svg]:px-3 w-full justify-between h-11 px-3 mb-1 rounded-lg transition-colors hover:bg-accent text-foreground"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="text-sm font-medium">{title}</span>
        </div>
        <div className={`w-4 h-4 ${isOpen ? "rotate-90" : ""}`}>
          <BsChevronRight />
        </div>
      </button>

      {isOpen && (
        <div className="overflow-hidden">
          <div className="space-y-1">{children}</div>
        </div>
      )}
    </div>
  );
};

export default CollapsibleSection;
