import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  const [state] = React.useState([
    {
      id: 1,

      heading: "HTML",
      text: "HTML stands for Hyper Text Markup Language, HTML is the standard markup language for creating Web pages, HTML describes the structure of a Web page,HTML consists of a series of elements",
    },
    {
      id: 2,

      heading: "CSS",
      text: "CSS stands for Cascading Style Sheets,CSS describes how HTML elements are to be displayed on screen, paper, or in other media,External stylesheets are stored in CSS files",
    },
    {
      id: 3,
      heading: "BOOTSTRAP",
      text: "Bootstrap is a free front-end framework for faster and easier web development,Bootstrap includes HTML, tables, navigation, modals,  as well as optional JavaScript plugins",
    },
    {
      id: 4,

      heading: "JAVASCRIPT",
      text: "JavaScript is the world's most popular programming language,JavaScript is the world's most popular programming language,JavaScript is easy to learn.",
    },
    {
      id: 5,

      heading: "REACT JS",
      text: "React is a JavaScript library for building user interfaces,React is used to build single page applications,React allows us to create reusable UI components.",
    },
    {
      id: 6,

      heading: "GIT",
      text: "Git is a version control system,Git helps you keep track of code changes,Git is used to collaborate on code",
    },
    {
      id: 7,

      heading: "GIT",
      text: "Git is a version control system,Git helps you keep track of code changes,Git is used to collaborate on code",
    },
    {
      id: 8,

      heading: "GIT",
      text: "Git is a version control system,Git helps you keep track of code changes,Git is used to collaborate on code",
    },
  ]);
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h3>I am Monir Hossen</h3>
          <p>
            I am Monir Hossen, professional web developer with long time
            experience in this field
          </p>
        </div>
      </header>

      <main>
        <section className="Myservice">
          <h2 className="Myskill">My Skill</h2>
          <hr className="text-white" />

          <div className="Bg-main">
            {state.map((info) => (
              <div className="card colum-4 text-center">
                <div className="card-Title">
                  <h3>{info.heading}</h3>
                  <div className="cardBody">
                    <p>{info.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
