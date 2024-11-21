import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="mx-48">
        <h1 className="text-4xl font-extrabold text-center pt-10">About section</h1>
        <p className="text-base font-normal mt-4 text-gray-400">
          Our mission is to provide warmth and support to those in need during
          the winter months. Through donations of clothing, blankets, <br />
          food, and financial contributions, we help individuals facing
          homelessness, low-income families, and others in crisis.
        </p>
      </div>
      <div className="card bg-base-100 mx-48 mt-7 shadow-xl">
        <div className="card-body text-center">
          <h2 className="card-title place-content-center text-2xl font-bold my-3">
            How You Can Contribute
          </h2>
          <p>
            You can contribute by donating winter clothing, blankets, and food
            at collection points, making financial contributions to purchase
            supplies, or volunteering your time to sort and distribute
            donations. Your support directly helps those in need during the
            winter season.
          </p>
          <div className="card-actions justify-center">
            <Link to={'/DonationCampaigns'} className="btn btn-wide text-black bg-green-200">Donate Now</Link>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">How It Works</h2>
          <p className="text-lg text-gray-600 mb-12">
            Here's how you can contribute to making this winter safer and warmer
            for those in need:
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-blue-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7h18M3 11h18M3 15h18M3 19h18"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Donate Items
              </h3>
              <p className="text-gray-600">
                Drop off new or gently used winter clothing, blankets, and food
                at our local collection points. Visit our website for locations
                and timings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-green-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2 2 4-4m0 0l-4-4-2 2m4 4H6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Financial Donations
              </h3>
              <p className="text-gray-600">
                Your financial support helps us purchase more winter essentials
                and fund outreach programs. Donate online now to make a
                difference.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-yellow-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v4m0 0l-2-2m2 2l2-2m4 12h-1a2 2 0 00-2 2v3a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2h-1m-4 0h-4m0 0H8a2 2 0 00-2 2v3a2 2 0 002 2h4a2 2 0 002-2v-3a2 2 0 00-2-2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Volunteer
              </h3>
              <p className="text-gray-600">
                Join us in sorting, packing, and distributing donations. Your
                time can make a direct impact in the lives of those in need.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Supported Divisions
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Homeless Shelters
                </h4>
                <p className="text-gray-600">
                  Donations are provided to shelters helping individuals facing
                  homelessness, ensuring warmth and safety during the winter.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Low-Income Families
                </h4>
                <p className="text-gray-600">
                  We distribute winter essentials like clothing and blankets to
                  families struggling to afford them, helping them stay warm
                  during the cold months.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Community Outreach Programs
                </h4>
                <p className="text-gray-600">
                  We partner with local community groups to distribute donations
                  directly to those in crisis, making sure no one is left
                  without support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
        <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Your Donation Matters</h2>
            <p className="text-lg text-gray-600 mb-12">Every donation counts and makes a lasting impact on those who are most vulnerable during <br /> the cold winter months. Here's how your support helps:</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                <svg className="w-12 h-12 text-yellow-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c0-1.1.9-2 2-2s2 .9 2 2v8c0 1.1-.9 2-2 2s-2-.9-2-2V8z"></path>
                </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Provides Warmth</h3>
                <p className="text-gray-600">Your donation of clothing and blankets ensures that those without shelter can stay warm and safe during the harshest conditions.</p>
            </div>

        
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                <svg className="w-12 h-12 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2 2 4-4m0 0l-4-4-2 2m4 4H6"></path>
                </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Fills Empty Stomachs</h3>
                <p className="text-gray-600">Your food donations help feed families who struggle to provide meals during the winter months, ensuring no one goes hungry.</p>
            </div>

        
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                <svg className="w-12 h-12 text-blue-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v12M9 12h6"></path>
                </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Brings Communities Together</h3>
                <p className="text-gray-600">By supporting this cause, you become part of a larger movement to help those in need, fostering compassion and unity in your community.</p>
            </div>
            </div>
        </div>
        </section>
      
        <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get Involved</h2>
            <p className="text-lg text-gray-600 mb-12">There are many ways you can help, from spreading awareness to organizing donation drives. <br /> Here’s how you can make a bigger impact:</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                <svg className="w-12 h-12 text-purple-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6H4l7-7 7 7h-5v6H9z"></path>
                </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Start a Donation Drive</h3>
                <p className="text-gray-600">Host a local donation drive with your community, school, or workplace to collect much-needed winter clothing and essentials.</p>
            </div>


            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                <svg className="w-12 h-12 text-pink-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6H4l7-7 7 7h-5v6H9z"></path>
                </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Spread Awareness</h3>
                <p className="text-gray-600">Help spread the word about the winter donation drive through social media, flyers, and word of mouth to encourage others to participate.</p>
            </div>

            
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                <svg className="w-12 h-12 text-orange-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12h-6m6 0l-3-3m3 3l-3 3m-7 0H5m0 0l3-3m-3 3l3 3"></path>
                </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Fundraise</h3>
                <p className="text-gray-600">Organize fundraising events to raise money for purchasing more essential items for those in need during the winter season.</p>
            </div>
            </div>
        </div>
        </section>


    </div>
  );
};

export default AboutSection;
