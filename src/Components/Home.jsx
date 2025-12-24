import digital from "../../src/assets/digital1.png";

function Home() {
  return (
    <main
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100"
    >
      <div className="max-w-7xl mx-auto min-h-screen flex items-center px-6 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full">
              Digital Agency
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Building Brands for the{" "}
              <span className="text-purple-600">Digital Future</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              We help startups and growing businesses design, build, and scale
              digital products that convert users into loyal customers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-lg hover:bg-purple-700 transition">
                Get Started
              </button>

              <button className="px-8 py-3 border border-gray-300 rounded-full font-semibold text-gray-800 hover:border-purple-600 hover:text-purple-600 transition">
                View Our Work
              </button>
            </div>

            {/* Trust Hint */}
            <p className="text-sm text-gray-500 pt-2">
              Trusted by startups, creators & modern brands
            </p>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center">
            {/* Glow Effects */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-300 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-30"></div>

            <img
              src={digital}
              alt="Digital Agency"
              className="relative max-w-[320px] sm:max-w-md lg:max-w-lg rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
