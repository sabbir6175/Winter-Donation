import { useLoaderData } from "react-router-dom";
import DonationCard from "./DonationCard";

const DonationCompanions = () => {
  const Donation = useLoaderData();
//   console.log( DonationData);

  return (
    <div>
      <h1> Donation Campaigns Page</h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
             Donation.map((data,index) => <DonationCard key={index} data ={data}></DonationCard>)
        }
      </div>
    </div>
  );
};

export default DonationCompanions;
