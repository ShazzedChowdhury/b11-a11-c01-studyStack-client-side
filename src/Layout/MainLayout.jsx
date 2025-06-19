import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
        <footer className=" bg-base-100">
          <Footer />
        </footer>
      </>
    );
};

export default MainLayout;