import React from "react";
import { cn } from "@/utils/cn";

const Badge = React.forwardRef(({ 
  className, 
  variant = "default",
  children,
  ...props 
}, ref) => {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    trial: "bg-warning/10 text-warning border border-warning/20",
    active: "bg-success/10 text-success border border-success/20",
    churned: "bg-error/10 text-error border border-error/20",
    info: "bg-info/10 text-info border border-info/20"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = "Badge";

export default Badge;