import React from 'react';
import './style.scss';

import ContentBox from '../../entities/contentBox';
import Table from '../../entities/table';

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <ContentBox>
          <Table />
        </ContentBox>
      </div>
    </main>
  );
};

export default Main;
