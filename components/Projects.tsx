import Project from "./Project";
import { useState } from "react";

const picturesChess: string[] = [
  "../src/assets/chess.jpg",
  "../src/assets/chess_two.jpg",
  "../src/assets/chess_three.jpg",
  "../src/assets/chess_four.jpg",
];

const picturesThreadit: string[] = [
  "../src/assets/threadit.jpg",
  "../src/assets/threadit_two.jpg",
  "../src/assets/threadit_three.jpg",
  "../src/assets/threadit_four.jpg",
];

const projectItems = [
  {
    id: "0",
    title: "Chess",
    pictures: picturesChess,
    descriptions: [
      "My first coding project. I did this project between my first and second semester at BCIT.",
      "We had only worked with Python at the time and JavaScript syntax scared me so I challenged myself to create a functional chess web app.",
    ],
    references: ["Tris002xx/chess"],
  },
  {
    id: "1",
    title: "Reddit-Clone",
    pictures: picturesThreadit,
    descriptions: [
      "A reddit clone showed me how to develop a full stack application with CRUD capabilities, authentication and database querying.",
      "The most challenging part for me was implementing nested comments.",
      "Written in JavaScript with EJS for dynamic front end rendering and Express for HTTP routing!",
    ],
    references: ["Tris002xx/Threadit"],
  },
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(projectItems[0]);
  return (
    <section className="flex flex-col gap-4 p-4">
      {
        <Project
          key={currentPage.id}
          id={currentPage.id}
          title={currentPage.title}
          pictures={currentPage.pictures}
          descriptions={currentPage.descriptions}
          references={currentPage.references}
        ></Project>
      }
      <menu className="flex justify-center gap-4">
        <button
          className="bg-gray-200 rounded-2xl p-2 hover:bg-gray-400 space-grotesk-p p-2 md:text-2xl text-start"
          onClick={() => {
            if (Number(currentPage.id) - 1 >= 0)
              setCurrentPage(projectItems[Number(currentPage.id) - 1]);
          }}
        >
          <img
            className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
            src="https://img.icons8.com/fluency-systems-regular/48/long-arrow-left.png"
            alt="long-arrow-left"
          />
        </button>
        <button
          className="bg-gray-200 rounded-2xl p-2 hover:bg-gray-400 space-grotesk-p p-2 md:text-2xl text-start"
          onClick={() => {
            if (Number(currentPage.id) + 1 < projectItems.length) {
              setCurrentPage(projectItems[Number(currentPage.id) + 1]);
            }
          }}
        >
          <img
            className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]"
            src="https://img.icons8.com/fluency-systems-regular/48/long-arrow-right.png"
            alt="long-arrow-right"
          />
        </button>
      </menu>
    </section>
  );
};

export default Projects;
