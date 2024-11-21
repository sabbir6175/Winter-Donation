import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Outlet } from 'react-router-dom';


const HomeLayout = () => {
    return (
        <div className=''>
           <header>
                <Navbar></Navbar>
           </header>
           <main className='mt-20 '>
                <Outlet></Outlet>
           </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;