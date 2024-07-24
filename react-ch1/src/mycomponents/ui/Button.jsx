import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

const Button = ({ className, variant, ...props }) => {

  return (
    <button {...props} className={cn(buttonVarients({ variant }), className)} />
  );
};

const buttonVarients = cva(
  "py-2 px-4 rounded-md font-semibold hover:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-rose-600 to-rose-400 text-black",
        secondary: "bg-gradient-to-r from-gray-500 to-gray-700 text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export default Button;
