import React, { ReactNode, HTMLProps } from 'react'
import clsx from 'clsx'

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  className?: string,
  children?: ReactNode
}

const Container: React.FC<ContainerProps> = ({ className, children, ...props}) => {
  return (
    <div
      className={clsx(
        "max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container