import { useState } from "react";
import { FiUpload } from "react-icons/fi";

// Job data
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    popular: true,
    description:
      "Build performant web applications with React, Tailwind, and modern tools.",
    details:
      "Responsibilities:\n- Develop scalable web apps\n- Collaborate with design & backend teams\n- Maintain code quality\n\nRequirements:\n- 2+ years React experience\n- Strong CSS/Tailwind skills",
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "Remote",
    type: "Full-time",
    popular: false,
    description:
      "Develop scalable APIs and backend systems using Node.js and databases.",
    details:
      "Responsibilities:\n- Build RESTful APIs\n- Ensure system security & performance\n- Collaborate with frontend teams\n\nRequirements:\n- 3+ years Node.js experience\n- Database management skills",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full-time",
    popular: true,
    description:
      "Design intuitive interfaces and engaging user experiences for web and mobile.",
    details:
      "Responsibilities:\n- Create wireframes & prototypes\n- Collaborate with dev team\n- Improve user flow\n\nRequirements:\n- 2+ years UI/UX experience\n- Figma/Adobe XD proficiency",
  },
  {
    id: 4,
    title: "Content Writer",
    location: "Remote",
    type: "Part-time",
    popular: false,
    description:
      "Create compelling content for blogs, websites, and social media.",
    details:
      "Responsibilities:\n- Write engaging articles\n- Optimize content for SEO\n- Collaborate with marketing team\n\nRequirements:\n- Excellent writing skills\n- SEO knowledge",
  },
  {
    id: 5,
    title: "Digital Marketing Specialist",
    location: "Remote",
    type: "Contract",
    popular: false,
    description: "Execute high-impact digital campaigns to grow engagement.",
    details:
      "Responsibilities:\n- Plan and execute campaigns\n- Track analytics & ROI\n- Social media management\n\nRequirements:\n- 2+ years digital marketing experience",
  },
  {
    id: 6,
    title: "Project Manager",
    location: "Remote",
    type: "Full-time",
    popular: false,
    description:
      "Coordinate teams and ensure projects are delivered on time and within scope.",
    details:
      "Responsibilities:\n- Plan sprints & deadlines\n- Coordinate team members\n- Monitor project progress\n\nRequirements:\n- Strong organizational skills\n- PMP or similar experience preferred",
  },
  {
    id: 7,
    title: "SEO Specialist",
    location: "Remote",
    type: "Full-time",
    popular: false,
    description:
      "Optimize websites to improve organic search visibility and rankings.",
    details:
      "Responsibilities:\n- Conduct keyword research\n- Implement on-page & off-page SEO\n- Monitor analytics\n\nRequirements:\n- SEO tools experience\n- Google Analytics proficiency",
  },
  {
    id: 8,
    title: "Quality Assurance Engineer",
    location: "Remote",
    type: "Contract",
    popular: false,
    description:
      "Test applications, identify bugs, and ensure high-quality releases.",
    details:
      "Responsibilities:\n- Write test plans\n- Execute manual & automated tests\n- Report and track defects\n\nRequirements:\n- QA experience\n- Attention to detail",
  },
  {
    id: 9,
    title: "Graphic Designer",
    location: "Remote",
    type: "Part-time",
    popular: false,
    description:
      "Create visual designs for digital and print media to enhance brand presence.",
    details:
      "Responsibilities:\n- Design marketing graphics\n- Collaborate with marketing & content\n- Maintain brand consistency\n\nRequirements:\n- Adobe Creative Suite experience",
  },
  {
    id: 10,
    title: "Customer Success Manager",
    location: "Remote",
    type: "Full-time",
    popular: false,
    description:
      "Ensure client satisfaction and drive account growth for our services.",
    details:
      "Responsibilities:\n- Build strong client relationships\n- Address support requests\n- Identify upsell opportunities\n\nRequirements:\n- Strong communication skills\n- CRM experience preferred",
  },
];

// Tabs / filters
const tabs = ["All", "Full-time", "Part-time", "Contract", "Remote"];

const Career = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [modalJob, setModalJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    file: null,
  });

  // Filtered jobs for tabs/carousel
  const filteredJobs =
    selectedTab === "All"
      ? jobs
      : jobs.filter(
          (job) => job.type === selectedTab || job.location === selectedTab
        );

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application submitted for ${modalJob.title}!`);
    setFormData({ name: "", email: "", file: null });
    setModalJob(null);
  };

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="inline-block mb-3 px-4 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full animate-bounce">
            Join Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Careers at <span className="text-purple-600">TEXIFY</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Explore our open positions and find the role that’s right for you.
          </p>
        </div>

        {/* Tabs / Filters */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                selectedTab === tab
                  ? "bg-purple-600 text-white shadow-lg animate-pulse"
                  : "bg-white text-gray-700 hover:bg-purple-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Scrollable Carousel for Jobs */}
        <div className="flex gap-6 overflow-x-auto pb-6 scroll-smooth">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              onClick={() => setModalJob(job)}
              className="min-w-[300px] group relative bg-white/90 backdrop-blur-md rounded-3xl shadow-md p-6 flex flex-col cursor-pointer transition transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {job.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                {job.location} • {job.type}
              </p>
              <p className="text-gray-600 flex-grow">{job.description}</p>
              <div className="mt-4 text-purple-600 font-semibold group-hover:underline">
                View Details →
              </div>
            </div>
          ))}
        </div>

        {/* Modal with form */}
        {modalJob && (
          <div
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
            onClick={() => setModalJob(null)}
          >
            <div
              className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl transform transition-all scale-95 animate-fadeIn overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalJob(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-4">{modalJob.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                {modalJob.location} • {modalJob.type}
              </p>
              <p className="text-gray-700 whitespace-pre-line mb-6">
                {modalJob.details}
              </p>

              {/* Application Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <label className="flex items-center gap-3 border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-purple-50 transition">
                  <FiUpload className="text-purple-600 text-xl" />
                  <span>
                    {formData.file ? formData.file.name : "Upload CV"}
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) =>
                      setFormData({ ...formData, file: e.target.files[0] })
                    }
                    required
                  />
                </label>
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Career;
