import type { FC, ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  children?: ReactNode;
}

const PageHeader: FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <header className="py-6 px-4 bg-card shadow-md text-center">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-primary">
          {title}
        </h1>
        {children && <div>{children}</div>}
      </div>
    </header>
  );
};

export default PageHeader;
