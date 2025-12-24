function About() {
  return (
    <main id="about" className="bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-purple-100 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full">
            About Us
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            We’re a Digital Agency Focused on{" "}
            <span className="text-purple-600">Growth & Impact</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            We partner with ambitious brands and startups to design, build, and
            scale meaningful digital experiences that drive real business
            results.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              TEXIFY was founded with one clear mission — to help brands stand
              out in an increasingly crowded digital world. We noticed that many
              businesses had great ideas but lacked the digital strategy and
              execution needed to bring them to life.
            </p>
            <p className="text-gray-600">
              Today, we work with startups, creators, and growing businesses to
              turn ideas into powerful digital products through thoughtful
              design, clean code, and data-driven strategy.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-40"></div>
            <div className="bg-white shadow-xl rounded-3xl p-8 relative">
              <h3 className="text-xl font-semibold mb-4">What We Believe In</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Strategy before execution</li>
                <li>• Design that serves a purpose</li>
                <li>• Clean, scalable development</li>
                <li>• Long-term partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                text: "We stay ahead of trends to deliver modern, future-proof solutions.",
              },
              {
                title: "Quality",
                text: "Every project is crafted with attention to detail and excellence.",
              },
              {
                title: "Transparency",
                text: "Clear communication and honesty guide everything we do.",
              },
              {
                title: "Growth",
                text: "We focus on solutions that drive measurable business growth.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-purple-600">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Discovery",
              "Strategy",
              "Design & Development",
              "Launch & Growth",
            ].map((step, index) => (
              <div key={step} className="space-y-4">
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold">{step}</h3>
                <p className="text-sm text-gray-600">
                  We collaborate closely to ensure every phase delivers value.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 py-20 text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Let’s Build Something Great Together
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-purple-100">
          Ready to elevate your brand and create digital experiences that stand
          out?
        </p>

        <a
          href="#contact"
          className="inline-block mt-8 bg-white text-purple-600 px-10 py-3 rounded-full font-semibold hover:bg-purple-100 transition"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}

export default About;
