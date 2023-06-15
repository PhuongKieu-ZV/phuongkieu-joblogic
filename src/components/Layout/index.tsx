import React, { ReactNode } from 'react';
import { LayoutWrapper } from './style';

const AppLayout: React.FC<{ children: ReactNode }> = (props) => {
  const { children } = props;
  return (
    <LayoutWrapper>
      <div className='container'>{children}</div>
    </LayoutWrapper>
  );
};

export default AppLayout;
