import { twMerge } from "tailwind-merge";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(useGSAP, Flip);

interface HeaderProps {
  pageChanger: (
    newPage: "Landing" | "AboutMe" | "Projects" | "Skills" | "ContactMe"
  ) => void;

  currentPage: "Landing" | "AboutMe" | "Projects" | "Skills" | "ContactMe";
}

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
      <nav className="box flex flex-col justify-between border-b-1 border-gray-200 p-2 gap-2 md:flex-row">
        <div className="flex justify-between">
          <button onClick={() => pageChanger("Landing")}>
            <h1
              className={
                currentPage == "Landing"
                  ? twMerge(
                      "animate-pulse",
                      "flex justify-between space-grotesk-h1 text-gray-400 md:text-xl hover:text-black"
                    )
                  : "flex justify-between space-grotesk-h1 text-gray-400 md:text-xl hover:text-black"
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
            <h1 className="flex justify-between space-grotesk-h1 text-gray-400 md:text-xl hover:text-black md:hidden">
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
            <button
              onClick={() => pageChanger("AboutMe")}
              className={
                currentPage == "AboutMe"
                  ? twMerge(
                      "animate-pulse",
                      "space-grotesk-a text-gray-600 md:text-xl hover:text-black flex"
                    )
                  : "space-grotesk-a text-gray-400 md:text-xl hover:text-black flex"
              }
            >
              About me
            </button>
          </li>
          <li>
            <button
              onClick={() => pageChanger("Projects")}
              className={
                currentPage == "Projects"
                  ? twMerge(
                      "animate-pulse",
                      "space-grotesk-a text-gray-600 md:text-xl hover:text-black flex"
                    )
                  : "space-grotesk-a text-gray-400 md:text-xl hover:text-black flex"
              }
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => pageChanger("Skills")}
              className={
                currentPage == "Skills"
                  ? twMerge(
                      "animate-pulse",
                      "space-grotesk-a text-gray-600 md:text-xl hover:text-black flex"
                    )
                  : "space-grotesk-a text-gray-400 md:text-xl hover:text-black flex"
              }
            >
              Skills
            </button>
          </li>
          {/* <li>
          <button
          onClick={() => pageChanger("ContactMe")}
          className={
            currentPage == "ContactMe"
            ? twMerge(
              "animate-pulse",
              "space-grotesk-a text-gray-600 md:text-xl hover:text-black flex"
              )
              : "space-grotesk-a text-gray-400 md:text-xl hover:text-black flex"
              }
              >
              Contact me
              </button>
              </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
