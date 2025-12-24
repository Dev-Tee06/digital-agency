import blog from "../assets/blog.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const blogs = [
  {
    id: 1,
    title: "Realtime Analytics",
    description:
      "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us...",
    image: blog,
  },
  {
    id: 2,
    title: "Digital Marketing Insights",
    description:
      "Learn how targeted strategies and data-driven decisions can transform your online presence and drive measurable results.",
    image: blog2,
  },
  {
    id: 3,
    title: "UI/UX Design Trends",
    description:
      "Stay ahead of the curve with the latest UI/UX design principles that improve engagement and user retention.",
    image: blog3,
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-3 px-4 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full">
            Insights & Articles
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Our Latest <span className="text-purple-600">Blogs</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our articles, insights, and case studies on digital trends,
            analytics, and creative strategies.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg bg-white hover:shadow-2xl transition"
            >
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-600 flex-grow">{blog.description}</p>
                <button className="mt-4 inline-block bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition">
                  Read More
                </button>
              </div>

              {/* Optional overlay for hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block bg-purple-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
