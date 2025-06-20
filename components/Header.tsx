import { twMerge } from "tailwind-merge";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";

import ThemeToggle from "./ThemeToggle";

gsap.registerPlugin(useGSAP, Flip);

interface HeaderProps {
  pageChanger: (
    newPage:
      | "Landing"
      | "About"
      | "Projects"
      | "Experience"
      | "Skills"
      | "Contact"
  ) => void;

  currentPage:
    | "Landing"
    | "About"
    | "Projects"
    | "Experience"
    | "Skills"
    | "Contact";
}

const pages: Array<
  "Landing" | "About" | "Projects" | "Experience" | "Skills" | "Contact"
> = ["About", "Skills", "Experience", "Projects"];

const Header = ({ pageChanger, currentPage }: HeaderProps) => {
  // const [currentPage, setCurrentPage] = useState(0);
  const [navState, setNavState] = useState(false);
  const container = useRef(null);
  // useGSAP(
  //   () => {
  //     gsap.to(".box", { rotation: 27, x: 100, duration: 1 });
  //   },
  //   { scope: container }
  // );

  return (
    <div ref={container}>
      <nav className="box flex flex-col justify-between border-b-1 border-gray-200 dark:border-gray-600 p-2 gap-2 md:flex-row">
        <div className="flex justify-between">
          <button onClick={() => pageChanger("Landing")}>
            <h1
              className={
                currentPage == "Landing"
                  ? twMerge(
                      "animate-pulse",
                      "flex justify-between space-grotesk-h1 dark:text-white md:text-xl p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 flex"
                    )
                  : "flex justify-between space-grotesk-h1 dark:text-white md:text-xl p-2 hover:bg-gray-300 dark:hover:bg-gray-700 flex"
              }
            >
              Tristan J Torres
            </h1>
          </button>
          <button
            onClick={() => {
              setNavState((prev) => !prev);
            }}
          >
            <h1 className="flex justify-between space-grotesk-h1 dark:text-white md:text-xl md:hidden p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 flex">
              Open
            </h1>
          </button>
        </div>

        <ul
          className={
            navState == false
              ? twMerge(
                  "transition-all transition-discrete md:flex flex-col md:flex-row gap-4 animate-fade-up",
                  "hidden"
                )
              : "transition-all transition-discrete md:flex flex-col md:flex-row gap-4 animate-fade-down"
          }
        >
          <li>
            <ThemeToggle />
          </li>
          {pages.map((page, idx) => (
            <li key={idx}>
              <button
                key={idx}
                onClick={() => pageChanger(page)}
                className={
                  currentPage == page
                    ? twMerge(
                        "animate-pulse",
                        "space-grotesk-a text-gray-800 dark:text-gray-200 px-4 py-2 rounded md:text-xl hover:bg-gray-300 dark:hover:bg-gray-700 flex"
                      )
                    : "space-grotesk-a text-gray-800 dark:text-gray-200 px-4 py-2 rounded md:text-xl hover:bg-gray-300 dark:hover:bg-gray-700 flex"
                }
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
