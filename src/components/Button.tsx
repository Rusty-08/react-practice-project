import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      transparent: ["bg-transparent", "active:bg-neutral-300"],
      ghost: ["hover:bg-neutral-200"],
      dark: [
        "bg-secondary-dark",
        "text-white",
        "hover:bg-secondary-dark-hover",
      ],
      separator: ["bg-white", "hover:bg-neutral-200"],
      primary: ["text-blue-600", "text-sm", "font-medium", "hover:bg-sky-100"],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-[2.5rem]",
        "h-[2.5rem]",
        "p-[0.6rem]",
        "flex",
        "items-center",
        "justify-center",
      ],
      ["show-more"]: [
        "rounded-full",
        "py-1.5",
        "md:w-1/3",
        "w-full",
        "flex",
        "items-center",
        "justify-center",
        "gap-1",
        "border",
        "border-secondary-border",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
}

export default Button;
