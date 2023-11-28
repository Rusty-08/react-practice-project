import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const buttonStyles = cva(
  [ "transition-colors"],
  {
    variants: {
      variant: {
        default: ["bg-secondary", "hover:bg-secondary-hover"],
        ghost: ["hover:bg-neutral-200"],
        dark: ["bg-secondary-dark", "text-white", "hover:bg-secondary-dark-hover"],
        separator: ["bg-white", "hover:bg-neutral-200"]
      },
      size: {
        default: ["rounded", "p-2"],
        icon: [
          "rounded-full", 
          "w-10", 
          "h-10", 
          "flex", 
          "items-center", 
          "justify-center", 
          "p-2.5",
        ],
        ["show-more"]: [
          "rounded-full",
          "py-1.5",
          "px-32",
          "flex", 
          "items-center", 
          "justify-center", 
          "gap-1",
          "border",
          "border-secondary-border"
        ]
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button 
      {...props} 
      className={twMerge(buttonStyles({ variant, size }), className)} />
  )
}

export default Button