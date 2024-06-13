import React, { ReactNode } from 'react';
import './style.scss';

const ContentBox = ({ children }: { children: ReactNode }) => {
  return <div className="content-box">{children}</div>;
};

export default ContentBox;
