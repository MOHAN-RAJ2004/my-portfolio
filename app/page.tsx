export default function Home() {
  return (
    <main className="p-10 bg-black text-white min-h-screen">

      {/* HERO */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold">
          Hi, I'm Mohanraj 👋
        </h1>
        <p className="text-gray-400 mt-2">
          AI & DS Student | Data Analyst | Web Developer
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">

        {/* About */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-400">
            I am an AI & DS student passionate about data analytics and web development.
            Currently working in an EV production plant and improving my skills daily.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {["Python", "Excel", "Power BI", "MySQL", "Tableau", "HTML", "CSS", "JavaScript"].map(skill => (
              <span key={skill} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>

          <div className="grid gap-4 md:grid-cols-2">

            <div className="p-4 border border-gray-700 rounded-lg hover:shadow-lg hover:border-white transition">
              <h3 className="text-lg font-bold">Accident Detection System</h3>
              <p className="text-gray-400 text-sm mt-1">
                IoT-based system using ESP32, GPS, and sensors to detect accidents and send alerts.
              </p>
            </div>

            <div className="p-4 border border-gray-700 rounded-lg hover:shadow-lg hover:border-white transition">
              <h3 className="text-lg font-bold">Data Analysis Dashboard</h3>
              <p className="text-gray-400 text-sm mt-1">
                Built using Power BI to analyze healthcare dataset and visualize insights.
              </p>
            </div>

          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-semibold">Contact</h2>

          <p className="mt-2 text-gray-300">
            Email: mohanrajjkm301@gmail.com
          </p>

          <div className="mt-3 flex gap-4">
            <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer" className="text-blue-400">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/mohanraj-g-2004-02m" target="_blank" rel="noopener noreferrer" className="text-blue-400">
              LinkedIn
            </a>
          </div>

          <div className="text-center mt-10">
            <a
              href="/resume.pdf"
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-300 transition"
            >
              Download Resume
            </a>
          </div>

        </div>

      </div>

    </main>
  );
}