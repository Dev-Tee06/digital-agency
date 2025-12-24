function Pricing() {
  const pricingPlans = [
    {
      id: 1,
      name: "Basic",
      price: "$299",
      features: ["Single Page Website", "Basic Branding", "1 Month Support"],
      popular: false,
    },
    {
      id: 2,
      name: "Standard",
      price: "$599",
      features: [
        "Multi-page Website",
        "Logo & Branding",
        "3 Months Support",
        "SEO Optimization",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Premium",
      price: "$999",
      features: [
        "Full Website & App",
        "Advanced Branding",
        "6 Months Support",
        "SEO & Marketing",
        "Analytics & Reporting",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Affordable Plans to Grow Your{" "}
            <span className="text-purple-600">Business</span>
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Choose a plan that fits your needs. Scale up anytime as your
            business grows.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center transition transform hover:scale-105 ${
                plan.popular ? "border-4 border-purple-600" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 px-4 py-1 bg-purple-600 text-white rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-extrabold text-gray-900 mb-6">
                {plan.price}
              </p>

              <ul className="mb-6 text-gray-600 space-y-3 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="mr-2 text-purple-600">✔</span> {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-auto bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
