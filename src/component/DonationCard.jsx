import React from 'react';
import { Link } from 'react-router-dom';


// {
//     "id": 6,
//     "title": "Rajshahi Rural Winter Clothing Collection",
//     "image": "https://i.ibb.co.com/jfvqP81/Rajshahi-Rural-Winter-Clothing-Collection.jpg",
//     "description": "A campaign to collect winter clothing for rural areas of Rajshahi, focusing on jackets, sweaters, and thermal wear for those in need.",
//     "status": "Upcoming",
//     "contactInfo": "ruralrajshahi@gmail.com",
//     "division": "Rajshahi"
// }

const DonationCard = ({data}) => {
    console.log(data)
    const {id,image,title,description,division} = data;
    return (
        <div>
            <div
           
            className="bg-white rounded-xl shadow-lg p-5 overflow-hidden"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="py-4">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-700 mt-2">{description}</p>
              <p className="text-sm text-gray-500 mt-2">
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
          {/* <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                    
                    src={image}
                    alt={title}
                    className="rounded-xl w-full h-[200px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p className="text-sm text-gray-500 mt-2">
                        <strong>Division:</strong> {division}
                    </p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div> */}
        </div>
    );
};

export default DonationCard;