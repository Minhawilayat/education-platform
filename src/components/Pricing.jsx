import React, { useState } from 'react';

function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePlan = (planType) => {
    setIsMonthly(planType === 'monthly');
  };

  return (
    <div>
      {/* Intro Section */}
      <section className="bg-gray-50 py-20">
  <div className="container px-5 mx-auto flex flex-col lg:flex-row items-center">
    <div className="lg:w-1/2 w-full text-center lg:text-left">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
        Unlock Your Potential with Our Tailored Pricing Plans
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Whether you're just starting out or scaling up, our plans are designed to help you grow. Choose the right option and start your journey today.
      </p>
      <div className="flex justify-center lg:justify-start gap-6">
        <button className="text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none font-semibold py-3 px-6 rounded-lg text-lg transition duration-300">
          Get Started
        </button>
        <button className="text-indigo-500 bg-transparent border-2 border-indigo-500 hover:bg-indigo-500 hover:text-white focus:outline-none font-semibold py-3 px-6 rounded-lg text-lg transition duration-300">
          Learn More
        </button>
      </div>
    </div>
    <div className="lg:w-1/2 w-full mt-10 lg:mt-0">
      <img src="https://img.freepik.com/free-vector/financial-obligation-document-promissory-bill-loan-agreement-debt-return-promise-issuer-payee-signing-contract-businessmen-making-deal_335657-848.jpg?ga=GA1.1.888683786.1740508090&semt=ais_hybrid&w=740" alt="Intro Image" className="rounded-lg shadow-lg w-full h-auto object-cover" />
    </div>
  </div>
</section>


      {/* Pricing Plans Section */}
      <section className="text-gray-600 body-font overflow-hidden bg-gray-50 py-20">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Pricing Plans</h2>
            <p className="text-gray-500 mb-6">
              Choose the plan that works best for you and unlock new features.
            </p>
            <div className="flex justify-center border-2 border-indigo-500 rounded-lg overflow-hidden">
              <button
                className={`px-6 py-2 text-sm font-semibold focus:outline-none transition ${isMonthly ? 'bg-indigo-500 text-white' : 'text-gray-700'}`}
                onClick={() => togglePlan('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 text-sm font-semibold focus:outline-none transition ${!isMonthly ? 'bg-indigo-500 text-white' : 'text-gray-700'}`}
                onClick={() => togglePlan('annually')}
              >
                Annually
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {/* START Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="p-6 rounded-2xl border-2 border-gray-300 bg-white shadow hover:shadow-xl transition">
                <h3 className="text-sm font-bold text-indigo-500 mb-2">START</h3>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{isMonthly ? 'Free' : 'Free'}</h1>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>✅ Basic tutorials</li>
                  <li>✅ Community access</li>
                  <li>✅ Email support</li>
                </ul>
                <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition">
                  Get Started
                </button>
              </div>
            </div>

            {/* PRO Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="relative p-6 rounded-2xl border-2 border-indigo-500 bg-white shadow-lg hover:shadow-xl transition">
                <span className="absolute top-0 right-0 bg-indigo-500 text-white text-xs px-3 py-1 rounded-bl-lg">POPULAR</span>
                <h3 className="text-sm font-bold text-indigo-500 mb-2">PRO</h3>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{isMonthly ? '$38' : '$360'} <span className="text-base font-normal text-gray-500">/mo</span></h1>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>✅ All START features</li>
                  <li>✅ Premium courses</li>
                  <li>✅ 1-on-1 mentorship</li>
                  <li>✅ Priority support</li>
                </ul>
                <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition">
                  Upgrade Now
                </button>
              </div>
            </div>

            {/* BUSINESS Plan */}
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="p-6 rounded-2xl border-2 border-gray-300 bg-white shadow hover:shadow-xl transition">
                <h3 className="text-sm font-bold text-indigo-500 mb-2">BUSINESS</h3>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{isMonthly ? '$99' : '$999'} <span className="text-base font-normal text-gray-500">/mo</span></h1>
                <ul className="space-y-2 mb-6 text-gray-600">
                  <li>✅ All PRO features</li>
                  <li>✅ Team management tools</li>
                  <li>✅ Admin dashboard</li>
                  <li>✅ Dedicated support</li>
                </ul>
                <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
