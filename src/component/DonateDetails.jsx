import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const DonateDetails = () => {
  const DonationCart = useLoaderData();
  // Fetch the campaign data
  const [formData, setFormData] = useState({
    quantity: "",
    itemType: "",
    pickupLocation: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! We will reach your destination soon.", {
      position: "top-center",
    });
    setFormData({
      quantity: "",
      itemType: "",
      pickupLocation: "",
      additionalNotes: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto flex justify-between p-6 bg-white rounded-lg shadow-lg">
     <div>
      cart commning
     </div>

      {/* Donation Form */}
      <div>
        <h2 className="mt-8 text-2xl font-semibold">Make a Donation</h2>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Quantity of items
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              placeholder="e.g., 2 jackets, 3 blankets"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Item Type
            </label>
            <input
              type="text"
              name="itemType"
              value={formData.itemType}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              placeholder="e.g., blanket, jacket, sweater"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pickup Location
            </label>
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
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
              value={formData.additionalNotes}
              onChange={handleChange}
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
