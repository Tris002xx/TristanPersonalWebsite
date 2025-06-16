import { useState } from "react";
import "./App.css";
import Header from "../components/Header";
import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Experience from "../components/Experience";

function App() {
  const [page, setPage] = useState<
    "Landing" | "About" | "Projects" | "Experience" | "Skills" | "Contact"
  >("Landing");

  const togglePage = (
    newPage:
      | "Landing"
      | "About"
      | "Projects"
      | "Experience"
      | "Skills"
      | "Contact"
  ) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setPage((_prev) => (_prev = newPage));
  };
  return (
    <main className="dark:bg-gray-800 dark:text-white min-h-full">
      <Header pageChanger={togglePage} currentPage={page}></Header>
      {page == "Landing" ? (
        <Landing></Landing>
      ) : page == "About" ? (
        <About></About>
      ) : page == "Projects" ? (
        <Projects></Projects>
      ) : page == "Skills" ? (
        <Skills></Skills>
      ) : page == "Experience" ? (
        <Experience></Experience>
      ) : (
        <Contact></Contact>
      )}
    </main>
  );
}

export default App;
