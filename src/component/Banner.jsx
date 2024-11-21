import React from 'react';
import AboutSection from './AboutSection';


const Banner = () => {

    return (
        <>
            <div className='mt-24 animate__animated animate__backInRight container mx-auto'>
            <div className="carousel w-full h-[274px] md:h-[374px] lg:h-[500px] ">
                <div id="slide1" className="carousel-item  relative w-full h-[274px] md:h-[374px] lg:h-[500px]">
                    <img
                    
                    src="https://i.ibb.co.com/Wv9gCk1/istockphoto-1077916628-612x612.jpg"
                    className="w-full h-full" />
                    <div className="absolute  left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[500px]">
                    <img
                    src="https://i.ibb.co.com/3vCp2bD/Image-1.jpg"
                    className="w-full h-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[500px]">
                    <img
                    src="https://i.ibb.co.com/8cF8TLT/Image-3.webp"
                    
                    className="w-full h-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[500px]">
                    <img
                    src="https://i.ibb.co.com/Z6TzD4D/4912879.jpg"
                    className="w-full h-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
             </div>
            </div>
            <AboutSection></AboutSection>
        </>
      
    );
};

export default Banner;