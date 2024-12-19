import React from 'react'
import classNames from 'classnames'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'solid' | 'destructive'
  size?: 'small' | 'medium' | 'large' | 'icon'
}

export const Button: React.FC<ButtonProps> = ({ variant = 'solid', size = 'medium', className, children, ...props }) => {
  const buttonClass = classNames(
    'px-4 py-2 rounded',
    {
      'bg-blue-500 text-white': variant === 'solid',
      'border border-blue-500 text-blue-500': variant === 'outline',
      'bg-red-500 text-white': variant === 'destructive',
      'p-1': size === 'icon',
      'px-2 py-1': size === 'small',
      'px-4 py-2': size === 'medium',
      'px-6 py-3': size === 'large',
    },
    className
  )

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}

export default Button