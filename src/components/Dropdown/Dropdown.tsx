import React, { useEffect, useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { AnimatePresence, motion } from 'framer-motion';

export interface DropdownOption {
  label: string | React.ReactNode;
  value: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

function Dropdown({
  options,
  value,
  onChange,
  placeholder = 'Select...',
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const handleSelect = (val: string) => {
    if (onChange) onChange(val);
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || placeholder;

  return (
    <div ref={dropdownRef} className='relative w-[200px]'>
      <button
        className='  text-sm w-full border border-line-default shadow-md p-2 rounded-lg text-left bg-white flex items-center justify-between'
        onClick={() => setOpen((o) => !o)}
        type='button'
      >
        {selectedLabel}
        {open ? (
          <BsChevronUp className='ml-2' />
        ) : (
          <BsChevronDown className='ml-2' />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className='absolute left-0 right-0 mt-1 bg-white border border-line-default rounded-lg shadow-lg z-10'
          >
            {options.map((opt) => (
              <li
                key={opt.value}
                className='p-2 cursor-pointer hover:bg-primary/10 text-sm'
                onClick={() => handleSelect(opt.value)}
              >
                {opt.label}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dropdown;
