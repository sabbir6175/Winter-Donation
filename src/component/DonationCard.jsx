import React from 'react';
import { Link } from 'react-router-dom';


const DonationCard = ({data}) => {

    const {id,image,title,description,division} = data;
    return (
        <div>
            <div
            className="bg-white rounded-xl shadow-lg p-5 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="py-4">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-500 mt-2">{description}</p>
              <p className="text-sm md:text-lg mt-2">
                <strong className='text-base font-semibold'>Division:</strong> {division}
              </p>
              <Link
                to={`/DonationCampaigns/${id}`}
                className="block mt-4 text-center bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
    );
};

export default DonationCard;