import { ElementType } from 'react'

interface ButtonProps {
  as?: ElementType
  variant: 'primary' | 'secondary'
  size: 'sm' | 'md' | 'lg'
  disabled: boolean
  children: React.ReactElement
}

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  children,
  ...props
}: ButtonProps) {
  let buttonClasses =
    'rounded-sm text-sm font-medium text-center min-w-120 box-border px-4'

  if (size === 'sm') {
    buttonClasses += ' h-8'
  } else {
    buttonClasses += ' h-10'
  }

  if (variant === 'primary') {
    buttonClasses += ' bg-ignite-500 text-white'
    if (!disabled) {
      buttonClasses += ' hover:bg-ignite-300'
    } else {
      buttonClasses += ' bg-gray-200'
    }
  } else if (variant === 'secondary') {
    buttonClasses += ' border-2 border-ignite-500 text-ignite-300'
    if (!disabled) {
      buttonClasses += ' hover:bg-ignite-500 text-white'
    } else {
      buttonClasses += ' text-gray-200 border-gray-200'
    }
  } else if (variant === 'tertiary') {
    buttonClasses += ' text-gray-100'
    if (!disabled) {
      buttonClasses += ' hover:text-white'
    } else {
      buttonClasses += ' text-gray-600'
    }
  }
  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
