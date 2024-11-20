import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Outlet } from 'react-router-dom';


const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
           <header>
                <Navbar></Navbar>
           </header>
           <main>
                <Outlet></Outlet>
           </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;