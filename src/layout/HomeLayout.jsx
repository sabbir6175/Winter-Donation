import React from 'react';
import Header from '../component/Header';
import Navbar from '../component/Navbar';
import Banner from '../component/Banner';
import Footer from '../component/Footer';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Banner></Banner>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;