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
      "Creating visually appealing, user-friendly, and responsive App designs that align with your brand identity.",
  },
  {
    id: 2,
    name: "Web Development",
    image: web,
    description:
      "Building fast, secure, and scalable websites with modern technologies to bring your ideas to life.",
  },
  {
    id: 3,
    name: "Graphics Design",
    image: graphics,
    description: "Improving your online visibility through detailed designs.",
  },
  {
    id: 4,
    name: "Marketing",
    image: marketing,
    description:
      "Crafting a strong brand identity through consistent visuals, messaging, and creative design.",
  },
];

function Services() {
  return (
    <section id="services" className="w-full bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-purple-800 font-bold text-center mb-10">
          Our Services
        </h2>
        <h5 className="text-center  mb-15">
          We are self-service data analytics software that lets you create
          visually.
        </h5>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="max-w-xs mx-auto p-6 bg-white shadow-lg rounded-2xl text-center"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Single Button at the end */}
        <div className="text-center">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
