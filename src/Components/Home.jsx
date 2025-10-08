import digital from "../../src/assets/digital1.png";

function Home() {
  return (
    <main id="home" className="">
      <div className="container min-h-[620px] flex mt-14 sm:mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
          {/* Text Section */}
          <div className="space-y-5 order-1 sm:order-1">
            <h1 className="text-4xl sm:text-5xl font-semibold px-4">
              Building Brands in the{" "}
              <span className="text-purple-500">Digital Agency.</span>
            </h1>
            <p className="mt-4 px-6 max-w-md mx-auto sm:mx-0">
              Your partner in navigating the ever-evolving landscape of digital
              marketing. From conceptualization to execution, we craft tailored
              solutions that drive results and elevate your brand to new
              heights.
            </p>
            <button className="mt-6 ml-5 px-6 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition">
              Get Started
            </button>
          </div>

          {/* Image Section */}
          <div className="order-2 sm:order-2 relative flex justify-center">
            <img
              src={digital}
              className="max-w-[300px] sm:max-w-full rounded-[40px]"
              alt="Digital Agency"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
