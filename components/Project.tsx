import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface ProjectProps {
  id: string;
  title: string;
  pictures: string[];
  descriptions: string[];
  references: string[];
  tools: React.ReactNode[];
}

const Project = ({
  title,
  pictures,
  descriptions,
  references,
  tools,
}: ProjectProps) => {
  const [currentPicture, setCurrentPicture] = useState(0);
  const [animateDirection, setAnimateDirection] = useState("");
  const handleAnimationEnd = () => {
    setAnimateDirection("");
  };

  const setCurrentPictureWithAnimate = (picNum: number) => {
    setCurrentPicture((prev) => {
      if (prev < picNum) {
        setAnimateDirection("animate-fade-left");
      } else if (prev > picNum) {
        setAnimateDirection("animate-fade-right");
      }
      return picNum;
    });
  };

  return (
    <div className="flex flex-col gap-10 animate-fade-up max-w-[1600px] m-auto p-4">
      <div className="flex flex-col border-b-1 p-4 gap-4 border-gray-300">
        <div className="flex flex-col-reverse md:flex-row items-center gap-4">
          <div className="flex flex-col">
            {pictures[currentPicture].toLowerCase().endsWith(".mp4") ? (
              <video
                className={twMerge(
                  " bg-gray-100 p-4 w-[1000px] md:w-[1600px]",
                  animateDirection
                )}
                controls
              >
                <source
                  src={pictures[currentPicture]}
                  type="video/mp4"
                ></source>
              </video>
            ) : (
              <img
                src={pictures[currentPicture]}
                alt={title + " project image " + (currentPicture + 1)}
                className={twMerge(
                  " bg-gray-100 p-4 w-[400px] md:w-[1600px]",
                  animateDirection
                )}
                onAnimationEnd={handleAnimationEnd}
              />
            )}
            <div className="flex justify-center gap-4">
              {pictures.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Show image ${idx + 1}`}
                  className={
                    currentPicture === idx
                      ? twMerge(
                          "rounded-4xl w-5 m-2 mt-4 bg-gray-200 hover:bg-gray-400 w-8 text-gray-400",
                          "animate-pulse bg-gray-400"
                        )
                      : "rounded-4xl w-5 m-2 mt-4 bg-gray-200 text-gray-200 hover:bg-gray-400 w-8 hover:text-gray-400"
                  }
                  onClick={() => setCurrentPictureWithAnimate(idx)}
                >
                  {"."}
                </button>
              ))}
            </div>
          </div>

          <section className="flex flex-col">
            <h1 className="space-grotesk-h1 text-xl p-2 md:text-6xl md:text-start">
              {title}
            </h1>
            <div className="grid grid-cols-5 md:flex md:justify-start md:flex-row gap-4">
              {tools.map((tool, idx) => (
                <span key={idx}>{tool}</span>
              ))}
            </div>
            {descriptions.map((description, idx) => (
              <p
                key={idx}
                className="space-grotesk-p p-2 text-sm md:text-3xl text-start"
              >
                {description}
              </p>
            ))}

            <menu className="flex justify-start gap-10">
              <a
                href={`https://github.com/${references[0]}`}
                className="space-grotesk-a text-gray-400 text-xs md:text-xl hover:text-black flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                  className="md:w-[30px] md:h-[30px]"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                {references[0]}
              </a>
            </menu>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Project;
