import { useState } from "react";
import "./App.css";
import Header from "../components/Header";
import Landing from "../components/Landing";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ContactMe from "../components/ContactMe";

function App() {
  const [page, setPage] = useState<
    "Landing" | "AboutMe" | "Projects" | "Skills" | "ContactMe"
  >("Landing");

  const togglePage = (
    newPage: "Landing" | "AboutMe" | "Projects" | "Skills" | "ContactMe"
  ) => {
    setPage((_prev) => (_prev = newPage));
  };
  return (
    <main className="dark:bg-gray-800 dark:text-white min-h-full">
      <Header pageChanger={togglePage} currentPage={page}></Header>
      {page == "Landing" ? (
        <Landing></Landing>
      ) : page == "AboutMe" ? (
        <AboutMe></AboutMe>
      ) : page == "Projects" ? (
        <Projects></Projects>
      ) : page == "Skills" ? (
        <Skills></Skills>
      ) : (
        <ContactMe></ContactMe>
      )}
    </main>
  );
}

export default App;
