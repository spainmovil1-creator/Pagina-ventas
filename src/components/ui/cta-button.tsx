import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CTAButtonProps extends Omit<HTMLMotionProps<"a">, "ref"> {
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
  children: React.ReactNode;
  className?: string;
}

const CTAButton = React.forwardRef<HTMLAnchorElement, CTAButtonProps>(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    return (
      <motion.a
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-body font-semibold transition-all duration-300 cursor-pointer rounded-lg text-center",
          variant === "primary" && [
            "gradient-cta text-accent-foreground shadow-cta",
            "hover:scale-105 hover:shadow-lg",
            "animate-pulse-glow",
          ],
          variant === "secondary" && [
            "bg-card text-foreground border-2 border-primary/20",
            "hover:border-accent hover:text-accent",
          ],
          size === "default" && "px-6 py-3 text-base",
          size === "lg" && "px-10 py-5 text-lg md:text-xl",
          className
        )}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }
);
CTAButton.displayName = "CTAButton";

export { CTAButton };
