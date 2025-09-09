"use client";

import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

export interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

const HaruInputField = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  errorMessage,
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label className="mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <motion.input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          whileFocus="focus"
          variants={{
            focus: {
              borderColor: "#38a169",
              scale: 1.02,
              transition: { duration: 0.2 },
            },
          }}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary ${
            errorMessage ? "border-red-500" : "border-gray-300"
          }`}
        />
        {type === "password" && (
          <span
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </div>
      {errorMessage && (
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default HaruInputField;
