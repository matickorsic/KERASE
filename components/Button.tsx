import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  let variantStyles = "";
  
  switch (variant) {
    case 'primary':
      variantStyles = "border-transparent text-white bg-accent hover:bg-accent-hover focus:ring-accent";
      break;
    case 'outline':
      variantStyles = "border-primary text-primary bg-transparent hover:bg-slate-50 focus:ring-primary";
      break;
    case 'white':
      variantStyles = "border-transparent text-primary bg-white hover:bg-slate-100 focus:ring-white";
      break;
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;