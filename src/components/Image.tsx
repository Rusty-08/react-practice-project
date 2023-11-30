import { VariantProps, cva } from 'class-variance-authority'
import React, { ComponentProps, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const imageStyles = cva(['transition-all'],
  {
    variants: {
      variant: {
        default: ["bg-cover", "w-full", "h-full"],
        video: ["md:rounded-xl", "rounded-none", "w-full", "min-h-[12rem]", "bg-cover"],
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
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoad = () => setImageLoaded(true)

  return (
    <>
    {!imageLoaded && (
      <div className={`${imageStyles({ variant })} bg-secondary-hover`} />
    )}
    <img 
      onLoad={handleImageLoad}
      style={{ display: imageLoaded ? 'flex' : 'none' }} 
      { ...props } 
      className={twMerge(imageStyles({ variant }), className)} />
    </>
  )
}

export default Image