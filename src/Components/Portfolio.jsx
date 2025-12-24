import App1 from "../assets/App1.png";
import Web1 from "../assets/web.png";
import Graphic1 from "../assets/graphics.png";
import Marketing1 from "../assets/marketing.jpeg";

const portfolioData = [
  {
    id: 1,
    title: "Mobile App Design",
    category: "App Development",
    image: App1,
  },
  {
    id: 2,
    title: "Corporate Website",
    category: "Web Development",
    image: Web1,
  },
  {
    id: 3,
    title: "Branding & Graphics",
    category: "Graphic Design",
    image: Graphic1,
  },
  {
    id: 4,
    title: "Digital Marketing Campaign",
    category: "Marketing",
    image: Marketing1,
  },
  {
    id: 5,
    title: "E-commerce Platform",
    category: "Web Development",
    image: Web1,
  },
  {
    id: 6,
    title: "Social Media Design",
    category: "Graphic Design",
    image: Graphic1,
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Portfolio of Our <span className="text-purple-600">Projects</span>
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            A selection of projects we’ve completed for our clients across
            mobile, web, branding, and marketing.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer hover:shadow-2xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-80 transition flex flex-col justify-center items-center text-center px-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block bg-purple-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
          >
            Hire Us / Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
