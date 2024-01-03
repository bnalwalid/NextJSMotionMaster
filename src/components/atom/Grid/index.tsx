import { WrapperStyle, RowStyle } from './styles';

interface IWrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<IWrapperProps> = ({ children }) => <WrapperStyle className="wrapper">{children}</WrapperStyle>;

interface IRowProps {
  $columns?: string;
  className?: string;
  $verticalAlignment?: 'top' | 'bottom' | 'center';
  $horizontalAlignment?: 'left' | 'right' | 'center';
  children: React.ReactNode;
  $isFieldGrid?: boolean;
  $mb?: string;
  $mt?: string;
}

export const Row: React.FC<IRowProps> = ({ className, children, ...rest }) => (
  <RowStyle className={`row ${className || ''}`} {...rest}>
    {children}
  </RowStyle>
);
