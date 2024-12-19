import React from 'react'
import classNames from 'classnames'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  const inputClass = classNames(
    'px-4 py-2 border rounded',
    className
  )

  return (
    <input className={inputClass} {...props} />
  )
}

export default Input