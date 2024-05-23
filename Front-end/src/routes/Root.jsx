// src/routes/Root.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../layout/header.jsx'; // Assurez-vous que ce chemin est correct

const Root = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
