import React from 'react';
import Content from './components/Content';
import Header from './components/Header';
import Table from './components/Table';

import './styles/global.css';

function App() {
  return (
    <>
      <Header />
      <Content>
        <Table />
      </Content>
    </>
  );
}

export default App;
