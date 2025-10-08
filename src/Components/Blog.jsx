import blog from "../assets/blog.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const blogs = [
  {
    id: 1,
    title: "Realtime analytics",
    description:
      "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us...",
    image: blog,
  },
  {
    id: 2,
    title: "Realtime analytics",
    description:
      "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us...",
    image: blog2,
  },
  {
    id: 3,
    title: "Realtime analytics",
    description:
      "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us...",
    image: blog3,
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-purple-500 pl-3">
          Our Blogs
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.description}</p>
                <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
