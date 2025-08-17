import { motion } from "framer-motion";

export interface HamburgerIconProps {
  isOpen?: boolean;
  className?: string;
}

const HamburgerIcon = ({
  isOpen = false,
  className = "",
}: HamburgerIconProps) => {
  return (
    <div className={`relative w-6 h-6 ${className}`}>
      <motion.span
        className="absolute left-0 block h-0.5 w-6 bg-current rounded-sm"
        animate={{
          top: isOpen ? "50%" : "25%",
          rotate: isOpen ? 45 : 0,
          translateY: isOpen ? "-50%" : "0%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute left-0 top-1/2 block h-0.5 w-6 bg-current rounded-sm -translate-y-1/2"
        animate={{
          opacity: isOpen ? 0 : 1,
          scale: isOpen ? 0.8 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute left-0 block h-0.5 w-6 bg-current rounded-sm"
        animate={{
          bottom: isOpen ? "50%" : "25%",
          rotate: isOpen ? -45 : 0,
          translateY: isOpen ? "50%" : "0%",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  );
};

export default HamburgerIcon;
