import React from 'react';
import Table from './components/Table';
import { testFetch } from './utils/apiCall';
// eslint-disable-next-line
const App: React.FC = () => {
  const data = testFetch();
  console.log(data);
  return (
    <>
      <Table />
      {/* <p>{data}</p> */}
    </>
  );
};

export default App;
