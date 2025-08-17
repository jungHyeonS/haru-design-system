export type DefaultComponentSize = "sm" | "md" | "lg";
export type DefaultComponentVariant =
  | "primary"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost";

// Sidebar types
export interface SidebarMenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  badge?: {
    text: string;
    variant?: "primary" | "secondary";
  };
  children?: SidebarMenuItem[];
  isActive?: boolean;
  onClick?: () => void;
}

export interface SidebarSection {
  id: string;
  title?: string;
  items: SidebarMenuItem[];
}

export type SidebarVariant = "default" | "floating";
export type SidebarCollapsible = "none" | "icon" | "offcanvas";
