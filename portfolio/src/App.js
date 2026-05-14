import React from "react";
import "./App.css";

function App() {

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
        <h3>VENNELA KOTHOJU</h3>
        <ul>
          <li onClick={() => scrollTo("home")}>Home</li>
          <li onClick={() => scrollTo("about")}>About</li>
          <li onClick={() => scrollTo("skills")}>Skills</li>
          <li onClick={() => scrollTo("projects")}>Projects</li>
          <li onClick={() => scrollTo("certifications")}>Certifications</li>
          <li onClick={() => scrollTo("contact")}>Contact</li>
        </ul>
      </nav>

      {/* Home */}
      <section id="home" className="home">
        <h1> I'm Vennela 👋</h1>
        <p>ADeveloper skilled in Python, JavaScript, React JS, HTML5, CSS3, Git, and IBM API Connect with hands-on experience in web development, API management, and building responsive applicationsr</p>
        <p>Email: vennelakothoju@gmail.com</p>
        <p>
  GitHub: <a href="https://github.com/vennela2325" target="_blank" rel="noreferrer">
    github.com/vennela2325
  </a>
</p>
<p>
  LinkedIn: <a href="https://www.linkedin.com/in/vennela-kothoju" target="_blank" rel="noreferrer">
    linkedin.com/in/vennela-kothoju
  </a>
</p>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a Computer Science graduate with hands-on experience in web development,
          API development using IBM API Connect, and machine learning projects.
          I am passionate about building scalable and secure applications.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="cards">
          <div className="card">
            <h3>Languages</h3>
            <p>Python, Java, C</p>
          </div>

          <div className="card">
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>

          <div className="card">
            <h3>Backend & APIs</h3>
            <p>REST APIs, IBM API Connect, OAuth, JWT</p>
          </div>

          <div className="card">
            <h3>Database & Tools</h3>
            <p>MySQL, Firebase, Git, Postman</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="cards">

          <div className="card">
            <h3>Expense Tracker Web Application</h3>
            <p>
              Developed a real-time expense tracking application to manage and categorize daily expenses.
            </p>
            <ul>
              <li>Implemented authentication using Firebase</li>
              <li>Real-time database updates</li>
              <li>Responsive UI with Bootstrap</li>
              <li>Expense visualization features</li>
            </ul>
            <p><b>Tech:</b> HTML, CSS, JavaScript, Firebase</p>
          </div>

          <div className="card">
            <h3>Driver Behavior Monitoring System</h3>
            <p>
              AI-based system to detect unsafe driving patterns and improve safety.
            </p>
            <ul>
              <li>Used deep learning for behavior detection</li>
              <li>Real-time alert system</li>
              <li>Image processing with OpenCV</li>
            </ul>
            <p><b>Tech:</b> Python, Deep Learning, OpenCV</p>
          </div>

          <div className="card">
            <h3>Invisible Digital Watermarking</h3>
            <p>
              Embedded invisible watermarks into images for copyright protection.
            </p>
            <ul>
              <li>Maintained image quality</li>
              <li>Implemented embedding & extraction</li>
              <li>Used matrix/image processing</li>
            </ul>
            <p><b>Tech:</b> Python, OpenCV, NumPy</p>
          </div>

          <div className="card">
            <h3>IBM API Connect Project</h3>
            <p>
              Built and managed secure APIs using enterprise-level API management tools.
            </p>
            <ul>
              <li>Created REST APIs using OpenAPI</li>
              <li>Applied OAuth 2.0 & JWT security</li>
              <li>Configured rate limits & policies</li>
              <li>Used Postman for testing</li>
            </ul>
            <p><b>Tech:</b> IBM API Connect, DataPower, OAuth</p>
          </div>

        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section">
        <h2>Certifications</h2>
        <ul>
          <li>HackerRank – Python & CSS</li>
          <li>Great Learning – Cloud Computing</li>
          <li>IIT Bombay – C Programming</li>
          <li>Udemy – IBM API Connect</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: vennelakothoju@gmail.com</p>
        <p>Phone: +91 6302231256</p>
       <p>
  GitHub: <a href="https://github.com/vennela2325" target="_blank" rel="noreferrer">
    github.com/vennela2325
  </a>
</p>
<p>
  LinkedIn: <a href="https://www.linkedin.com/in/vennela-kothoju" target="_blank" rel="noreferrer">
    linkedin.com/in/vennela-kothoju
  </a>
</p>
      </section>

    </div>
  );
}

export default App;