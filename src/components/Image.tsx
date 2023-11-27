import { VariantProps, cva } from 'class-variance-authority'
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const imageStyles = cva(['transition-all'],
  {
    variants: {
      variant: {
        default: ["bg-cover", "w-full", "h-full"],
        video: ["rounded-xl", "w-full", "bg-cover"],
        profile: ["rounded-full", "w-8", "h-8"]
      }
    },
    defaultVariants: {
      variant: "default",
    }
  }
)

type ImageProps = VariantProps<typeof imageStyles> & ComponentProps<"img">

function Image({ variant, className, ...props }: ImageProps) {
  return (
    <img { ...props } className={twMerge(imageStyles({ variant }), className)} />
  )
}

export default Image