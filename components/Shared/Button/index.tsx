import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'tertiary'
	size?: 'sm' | 'md' | 'lg'
	iconStart?: ReactNode
	iconEnd?: ReactNode
	children?: ReactNode
}

const Button = ({
	variant = 'primary',
	size = 'md',
	iconStart,
	iconEnd,
	children,
	className,
	...props
}: ButtonProps) => {
	const sizeStyles = {
		sm: 'px-2 py-1 text-xs',
		md: 'px-4 py-2 text-sm',
		lg: 'px-6 py-3 text-base'
	}

	const variantClasses = {
		primary: 'button-primary',
		secondary: 'button-secondary',
		tertiary: 'button-tertiary'
	}

	return (
		<button
			{...props}
			className={clsx(
				'button',
				sizeStyles[size],
				variantClasses[variant],
				className
			)}
		>
			{iconStart && <span className='button-icon'>{iconStart}</span>}
			{children && <span>{children}</span>}
			{iconEnd && <span className='button-icon'>{iconEnd}</span>}
		</button>
	)
}

export default Button
