"use client";

import { useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { BsSend } from "react-icons/bs";
import { BsMic } from "react-icons/bs";
import { BsPaperclip } from "react-icons/bs";

export interface ChatInputProps {
  placeholder?: string;
  minWidth?: string;
  onChange?: (value: string) => void;
  onSubmit?: () => void;
  onMicClick?: () => void;
  onAttachmentClick?: () => void;
}

function ChatInput({
  placeholder,
  minWidth = "min-w-[600px]",
  onChange,
  onSubmit,
  onMicClick,
  onAttachmentClick,
}: ChatInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit();
    }
  };
  const baseClasses =
    "w-full relative h-auto p-4 border rounded-lg transition-all duration-200 border-line-default shadow-md";
  return (
    <div
      className={clsx(twMerge(baseClasses, minWidth), {
        "border-primary": isFocused,
      })}
    >
      <textarea
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.value);
          }
        }}
        placeholder={placeholder}
        className={twMerge(
          "resize-none hover:shadow-none focus:outline-none scrollbar-hide w-full pr-16"
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{ scrollbarWidth: "none" }}
        onInput={(e) => {
          const target = e.target as HTMLTextAreaElement;
          target.style.height = "auto";
          target.style.height = target.scrollHeight + "px";
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (onSubmit) onSubmit();
          }
        }}
      />
      <div
        className="
      absolute bottom-4  right-4 flex flex-row gap-[8px] items-center justify-center"
      >
        <button
          onClick={onAttachmentClick}
          className="w-[30px] h-[30px] rounded-md flex items-center justify-center cursor-pointer hover:bg-primary/10"
        >
          <BsPaperclip />
        </button>
        <button
          onClick={onMicClick}
          className="w-[30px] h-[30px] rounded-md flex items-center justify-center cursor-pointer hover:bg-primary/10"
        >
          <BsMic />
        </button>
        <button
          onClick={handleSubmit}
          className="bg-primary hover:bg-primary/80 shadow-md w-[30px] h-[30px] rounded-md flex items-center justify-center cursor-pointer"
        >
          <BsSend color="white" />
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
