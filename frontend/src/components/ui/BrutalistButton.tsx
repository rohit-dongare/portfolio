import {
  forwardRef,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  type ReactNode,
} from 'react';

type BaseProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
    href?: never;
  };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
    href: string;
  };

export type BrutalistButtonProps = ButtonAsButton | ButtonAsAnchor;

export const BrutalistButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  BrutalistButtonProps
>(({ children, variant = 'secondary', size = 'md', className = '', ...props }, ref) => {
  const variantClass =
    variant === 'primary'
      ? 'brutalist-btn-primary'
      : variant === 'dark'
        ? 'brutalist-btn-dark'
        : '';

  const sizeClass = size === 'sm' ? 'brutalist-btn-sm' : size === 'lg' ? 'brutalist-btn-lg' : '';

  const combinedClasses = `brutalist-btn ${variantClass} ${sizeClass} ${className}`.trim();

  if (props.as === 'a') {
    const anchorProps = { ...props };
    delete anchorProps.as;
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} className={combinedClasses} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = { ...props };
  delete buttonProps.as;
  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} className={combinedClasses} {...buttonProps}>
      {children}
    </button>
  );
});

BrutalistButton.displayName = 'BrutalistButton';
