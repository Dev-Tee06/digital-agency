// src/Components/Reviews.jsx
import React from "react";

const reviewsData = [
  {
    id: 1,
    name: "Sarah",
    role: "CEO, TechCorp",
    review:
      "TEXIFY completely transformed our digital presence. Their innovative solutions and creative approach exceeded all expectations.",
  },
  {
    id: 2,
    name: "Michael",
    role: "Founder, StartupX",
    review:
      "The TEXIFY team is highly professional, creative, and reliable. Every project felt seamless and well-executed.",
  },
  {
    id: 3,
    name: "Davis",
    role: "Marketing Head, BrandCo",
    review:
      "Their strategies and designs helped us double our online engagement. TEXIFY truly understands modern digital marketing.",
  },
  {
    id: 4,
    name: "Ayomide",
    role: "Product Manager, WebSolutions",
    review:
      "Working with TEXIFY was a game-changer. Their attention to detail and innovation made a huge impact on our product launch.",
  },
];

function Review() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full">
            TEXIFY Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Hear from Clients Who{" "}
            <span className="text-purple-600">Trust TEXIFY</span>
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            TEXIFY helps brands grow through intelligent design, development,
            and digital strategies. Here’s what our clients say about working
            with us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-3xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
            >
              <p className="text-gray-700 mb-6 italic">“{review.review}”</p>
              <h4 className="text-lg font-semibold text-gray-900">
                {review.name}
              </h4>
              <span className="text-sm text-gray-500">{review.role}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block bg-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-purple-700 transition"
          >
            Work with TEXIFY
          </a>
        </div>
      </div>
    </section>
  );
}

export default Review;
