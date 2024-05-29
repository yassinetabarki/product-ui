import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './products/ProductList';
import SideBar from './commun/sidebar/SideBar';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';

function App() {

  return (
    <div className="App bg-gray-100">
      <div className='flex'>
        <div className='w-3/12'>
          <SideBar />
        </div>
        <div className='w-full '>
          <ProductList />
        </div>
      </div>


    </div>
  );
}

export default App;
