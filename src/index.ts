import "./index.css";

export { default as Button } from "./components/Button/Button";
export { default as ProgressBar } from "./components/ProgressBar/ProgressBar";
export { default as ChatInput } from "./components/ChatInput/ChatInput";
export { default as Dropdown } from "./components/Dropdown/Dropdown";
export { default as SideBar } from "./components/SideBar/SideBar";
export { default as Header } from "./components/Header/Header";
export { default as InputField } from "./components/InputField/InputField";
export { default as Typography } from "./components/Typography/Typography";

export type { ButtonProps } from "./components/Button/Button";
export type { ProgressBarProps } from "./components/ProgressBar/ProgressBar";
export type { ChatInputProps } from "./components/ChatInput/ChatInput";
export type { DropdownProps } from "./components/Dropdown/Dropdown";
export type { SideBarProps } from "./components/SideBar/SideBar";
export type { HeaderProps } from "./components/Header/Header";
export type { InputFieldProps } from "./components/InputField/InputField";
export type { TypographyProps } from "./components/Typography/Typography"

// Export sidebar types
export type {
  SidebarMenuItem,
  SidebarSection,
  SidebarVariant,
  SidebarCollapsible,
} from "./types/common";
