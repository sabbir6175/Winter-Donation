import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const DonateDetails = () => {
  const DonationCart = useLoaderData();
  const [formData, setFormData] = useState({});

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const quantity = form.quantity.value;
    const itemType = form.itemType.value;
    const pickupLocation = form.pickupLocation.value;
    const additionalNotes = form.additionalNotes.value;
    setFormData(quantity, itemType, pickupLocation, additionalNotes)
      toast.success("Thank you! We will reach your destination soon.", {
        position: "top-center",
      });
      e.target.reset()
   
  };


  
  return (
    <div className="w-9/12 md:w-full my-24 md:my-32 px-3 lg:my-44 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8   bg-white rounded-lg">
        <div className=" bg-white shadow rounded-xl lg:w-60 p-5 overflow-hidden w-full">
              <img
                src={DonationCart.image}
                alt={DonationCart.title}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <div className="py-4">
                <h3 className="text-xl font-semibold">{DonationCart.title}</h3>
                <p className="text-gray-500 mt-2">{DonationCart.description}</p>
                <p className="text-sm md:text-lg mt-2">
                  <strong className='text-lg font-semibold'>Division:</strong> {DonationCart.division}
                </p>
                <p>
                  <span className="text-lg font-bold">contactInfo:</span> {DonationCart.contactInfo}
                </p>
              </div>
        </div>
     
      <div>
        <h2 className="text-2xl font-semibold">Make a Donation</h2>
        <form onSubmit={handleSubmit}  className="w-full space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Quantity of items
            </label>
            <input
              type="number"
              name="quantity"
              className="mt-1 block w-full p-3  border border-gray-300 rounded-md"
              placeholder="e.g., 2 jackets, 3 blankets"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Item Type
            </label>
            <select className="border-2 py-3 w-full rounded-lg" name="itemType" id="">
              <option value="Select and items type">Select and items type</option>
              <option value="Blanket">Blanket</option>
              <option value="Jacket">Jacket</option>
              <option value="Sweater">Sweater</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pickup Location
            </label>
            <input
              type="text"
              name="pickupLocation"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Additional Notes (Optional)
            </label>
            <textarea
              name="additionalNotes"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              placeholder="Any additional instructions"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition"
          >
            Donate
          </button>
        </form>
      </div>
    </div>
  );
};

export default DonateDetails;
