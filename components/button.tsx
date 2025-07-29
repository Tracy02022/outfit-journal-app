// components/ui/button.tsx
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

export const Button = forwardRef(function Button(
  { className, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(
        'px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800',
        className
      )}
      {...props}
    />
  )
})
