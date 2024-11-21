import { useLoaderData } from "react-router-dom";
import DonationCard from "./DonationCard";

const DonationCompanions = () => {
  const Donation = useLoaderData();


  return (
    <div className="bg-gray-100 py-6 container mx-auto">
      <h1 className="text-3xl md:text-4xl text-center my-5 font-bold text-blue-500">Our Donation Campaigns</h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
        {
            Donation.map((data,index) => <DonationCard key={index} data ={data}></DonationCard>)
        }
      </div>
    </div>
  );
};

export default DonationCompanions;
