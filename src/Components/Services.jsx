import { Link } from "react-router-dom";
import App1 from "../assets/App1.png";
import web from "../assets/web.png";
import graphics from "../assets/graphics.png";
import marketing from "../assets/marketing.jpeg";

const servicesData = [
  {
    id: 1,
    name: "App Development",
    image: App1,
    description:
      "Designing and building intuitive, high-performance mobile applications that scale with your business.",
    path: "/services/app-development", // Add paths for navigation
  },
  {
    id: 2,
    name: "Web Development",
    image: web,
    description:
      "Building fast, secure, and scalable websites using modern technologies and best practices.",
    path: "/services/web-development",
  },
  {
    id: 3,
    name: "Graphic Design",
    image: graphics,
    description:
      "Creating compelling visual designs that communicate your brand story clearly and effectively.",
    path: "/services/graphic-design",
  },
  {
    id: 4,
    name: "Digital Marketing",
    image: marketing,
    description:
      "Helping brands grow online through strategic campaigns, content, and performance marketing.",
    path: "/services/digital-marketing",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full">
            Our Services
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Solutions Designed to Help Your Business{" "}
            <span className="text-purple-600">Grow</span>
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            We offer a full range of digital services tailored to meet your
            business goals and deliver measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => (
            <Link
              to={service.path} // Use Link here
              key={service.id}
              className="group bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-purple-100 group-hover:bg-purple-600 transition">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {service.name}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/contact" // Replace href with Link
            className="inline-block bg-purple-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
          >
            Let’s Work Together
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
