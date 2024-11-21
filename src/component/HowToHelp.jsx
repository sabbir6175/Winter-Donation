import React from 'react';

const HowToHelp = () => {
    return (
        <div className='bg-white'>
            <div className='container mx-auto  py-20 '>
                <h1 className='text-center font-bold text-3xl mb-3 text-red-500'>How To Help</h1>
                <p className='text-center text-base text-gray-500'>This winter, your donation can make a difference. With your support, we can provide warm clothing, blankets,<br /> and essential supplies to those in need.</p>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center my-20 px-3">
                    
                    <div class="bg-purple-100 border-2 shadow-lg rounded-lg p-6">
                        <h2 class="text-lg font-semibold text-red-400 mb-4">Warm Clothes or Blanket</h2>
                        <p class="text-gray-500">In winter, warm clothes and blankets are essential. Donating warm jackets, sweaters, socks, shawls, or blankets will help protect people from the cold.</p>
                    </div>

                   
                    <div class="bg-green-100 border-2 shadow-lg rounded-lg p-6">
                        <h2 class="text-lg font-semibold text-yellow-500 mb-4">Hot Food</h2>
                        <p class="text-gray-500">Providing hot meals such as tea, soup, or cooked food will keep people warm and nourished during the cold winter days.</p>
                    </div>

                    
                    <div class="bg-orange-100 border-2 shadow-lg rounded-lg p-6">
                        <h2 class="text-lg font-semibold text-cyan-500 mb-4">Water and Hot Drinks</h2>
                        <p class="text-gray-500">In winter, people may lack access to water, so offering hot drinks like tea or coffee can help keep them warm.</p>
                    </div>

                  
                    <div class="bg-red-100 border-2 shadow-lg rounded-lg p-6">
                        <h2 class="text-lg font-semibold text-orange-500 mb-4">Health Services</h2>
                        <p class="text-gray-500">During winter, many people's health may deteriorate, especially the elderly. Providing basic health services or medical help is crucial during this time.</p>
                    </div>

                    <div class="bg-blue-100 border-2 shadow-lg rounded-lg p-6">
                        <h2 class="text-lg font-semibold text-orange-500 mb-4">Collecting or Distributing Winter Clothes</h2>
                        <p class="text-gray-500">You can help collect winter clothes and distribute them to those in need, ensuring they stay warm during the cold months.</p>
                    </div>

                    
                    <div class="bg-lime-100 border-2 shadow-lg rounded-lg p-6">
                        <h2 class="text-lg font-semibold text-pink-500 mb-4">Providing Shelter</h2>
                        <p class="text-gray-500">Many people end up on the streets during winter. Offering them shelter or a safe place to stay can reduce their suffering from the cold.</p>
                    </div>

                   
                    <div class="bg-cyan-100 border-2 shadow-lg rounded-lg p-6">
                        <h2 class="text-lg font-semibold text-yellow-500 mb-4">Donations of Money or Food</h2>
                        <p class="text-gray-500">If you cannot donate time or materials, you can still help by donating money or food to those in need.</p>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default HowToHelp;