export default function Home() {
  return (
    <main className="p-10 bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="mb-10 text-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
  Hi, I'm Mohanraj 👋
</h1>
        <p className="mt-4 text-gray-400 text-lg">
          AI & DS Student | Data Analyst | Web Developer
        </p>
      </section>

      {/* ABOUT */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-2 text-gray-300">
          I am an AI & DS student passionate about data analytics and web development.
          Currently working in an EV production plant and improving my skills daily.
        </p>
      </section>

      {/* SKILLS */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="mt-2 text-gray-300 list-disc ml-5">
          <li>Python</li>
          <li>Excel</li>
          <li>Power BI</li>
          <li>MySQL</li>
          <li>Tableau</li>
          <li>HTML, CSS, JavaScript</li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="mt-3 p-4 border border-gray-700 rounded-lg">
          <h3 className="text-xl font-bold">Accident Detection System</h3>
          <p className="text-gray-400 mt-2">
            IoT-based system using ESP32, GPS, and sensors to detect accidents and send alerts.
          </p>
        </div>

        <div className="mt-3 p-4 border border-gray-700 rounded-lg">
          <h3 className="text-xl font-bold">Data Analysis Dashboard</h3>
          <p className="text-gray-400 mt-2">
            Built using Power BI to analyze healthcare dataset and visualize insights.
          </p>
        </div>

      </section>

      {/* CONTACT */}
      <a 
  href="/resume.pdf" 
  className="mt-3 inline-block bg-white text-black px-4 py-2 rounded"
>
  Download Resume
</a>
      <section>
        <h2 className="text-2xl font-semibold">Contact</h2>

        <p className="mt-2 text-gray-300">Email: mohanrajjkm301@gmail.com</p>

        <div className="mt-3 flex gap-4">
          <a href="https://github.com/settings/profile" target="_blank" className="text-blue-400">
            GitHub
          </a>

          <a href="www.linkedin.com/in/mohanraj-g-2004-02m
Van" target="_blank" className="text-blue-400">
            LinkedIn
          </a>
        </div>

      </section>

    </main>
  );
}