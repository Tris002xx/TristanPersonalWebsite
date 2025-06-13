import Project from "./Project";
import { useState } from "react";

const picturesChess: string[] = [
  "../src/assets/crop_chess.jpg",
  "../src/assets/2025-06-12 16-22-55.mp4",
];

const picturesThreadit: string[] = [
  "../src/assets/crop.jpg",
  "../src/assets/2025-06-12 17-31-01.mp4",
];

const projectItems = [
  {
    id: "0",
    title: "Chess ♟",
    pictures: picturesChess,
    descriptions: [
      "My first coding project 😎. I did this project between my first and second semester at BCIT.",
      "We had only worked with Python at the time and JavaScript syntax scared me so I challenged myself to create a functional chess web app.",
    ],
    references: ["Tris002xx/chess"],
    tools: [
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[50px] md:w-[100px]"
        viewBox="0 0 48 48"
      >
        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
        <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
        <path
          fill="#FFF"
          d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
        ></path>
        <path
          fill="#EEE"
          d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
        ></path>
      </svg>,
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[50px] md:w-[100px]"
        viewBox="0 0 48 48"
      >
        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
        <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
        <path
          fill="#FFF"
          d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
        ></path>
        <path
          fill="#EEE"
          d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
        ></path>
      </svg>,
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[50px] md:w-[100px]"
        viewBox="0 0 48 48"
      >
        <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
        <path
          fill="#000001"
          d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
        ></path>
      </svg>,
    ],
  },
  {
    id: "1",
    title: "Reddit-Clone 👽",
    pictures: picturesThreadit,
    descriptions: [
      "This reddit clone taught me how to develop a full stack application with CRUD capabilities, authentication and database querying from scratch.",
      "The most challenging part for me was implementing nested comments! 🥵",
    ],
    references: ["Tris002xx/Threadit"],
    tools: [
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[50px] md:w-[100px]"
        viewBox="0 0 50 50"
      >
        <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
      </svg>,
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[50px] md:w-[100px]"
        viewBox="0,0,256,256"
      >
        <g
          fill="#339af0"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
        >
          <g transform="scale(5.12,5.12)">
            <path d="M43.64063,1.00195c-1.46338,-0.04058 -3.02891,0.76641 -4.58203,2.14453c-0.369,0.328 -0.73752,0.69208 -1.10352,1.08008c-4.25,4.509 -8.19588,12.86028 -9.42187,19.23828c0.477,0.968 0.85166,2.20444 1.09766,3.14844c0.063,0.242 0.11906,0.46811 0.16406,0.66211c0.108,0.458 0.16602,0.75391 0.16602,0.75391c0,0 -0.03736,-0.14366 -0.19336,-0.59766c-0.03,-0.087 -0.06452,-0.18097 -0.10352,-0.29297c-0.017,-0.046 -0.03845,-0.10211 -0.06445,-0.16211c-0.277,-0.645 -1.04481,-2.00566 -1.38281,-2.59766c-0.289,0.852 -0.54286,1.64814 -0.75586,2.36914c0.974,1.783 1.56641,4.83789 1.56641,4.83789c0,0 -0.04992,-0.19767 -0.29492,-0.88867c-0.217,-0.611 -1.29964,-2.50912 -1.55664,-2.95312c-0.439,1.62 -0.61403,2.71447 -0.45703,2.98047c0.305,0.516 0.59656,1.40467 0.85156,2.38867c0.089,0.341 0.17195,0.69292 0.25195,1.04492c-0.265,2.327 -0.32722,4.66452 -0.19922,6.97852c0.133,2.508 0.48386,4.98378 0.88086,7.42578c0.042,0.257 0.27802,0.44297 0.54102,0.41797c0.275,-0.026 0.47717,-0.26992 0.45117,-0.54492c-0.125,-1.331 -0.23083,-2.65842 -0.29883,-3.98242l0.06055,0.59375c-0.095,-1.189 -0.12131,-2.46903 -0.07031,-3.83203c0.181,-4.834 1.29461,-10.66423 3.34961,-16.74023c3.473,-9.172 8.29022,-16.53287 12.69922,-20.04687c-4.019,3.63 -9.45794,15.37947 -11.08594,19.73047c-1.823,4.872 -3.11553,9.44322 -3.89453,13.82422c1.344,-4.107 5.6875,-5.87109 5.6875,-5.87109c0,0 2.13209,-2.62881 4.62109,-6.38281c-1.491,0.34 -3.94172,0.92258 -4.76172,1.26758c-1.21,0.508 -1.53516,0.68164 -1.53516,0.68164c0,0 3.91925,-2.38775 7.28125,-3.46875c4.625,-7.284 9.66384,-17.6322 4.58984,-22.1582c-0.77963,-0.69525 -1.62002,-1.02448 -2.49805,-1.04883zM9,3c-2.19652,0 -4,1.80348 -4,4v33c0,2.19652 1.80348,4 4,4h15c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-15c-1.11148,0 -2,-0.88852 -2,-2v-33c0-1.11148 0.88852,-2 2,-2h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587z"></path>
          </g>
        </g>
      </svg>,

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-[50px] md:w-[100px]"
        viewBox="0 0 48 48"
      >
        <path
          fill="#c0ca33"
          d="M34.868,28.641c0.73,0.675,1.409,1.362,2.151,1.974c1.007,0.832,2.125,1.469,3.471,1.568 c0.84,0.062,1.631-0.066,2.246-0.709c1.155-1.207,0.779-3.317-0.778-4.072c-0.955-0.463-1.975-0.795-2.975-1.163 c-1.596-0.587-3.121-1.287-4.309-2.555c-0.531-0.567-0.893-1.236-1.108-1.976c-0.615-2.118-0.692-4.257-0.017-6.366 c0.766-2.396,2.46-3.849,4.892-4.412c2.043-0.472,3.998-0.09,5.874,0.778c1.137,0.526,2.132,1.252,3.015,2.14 c0.186,0.187,0.224,0.333,0.093,0.574c-0.661,1.212-1.305,2.434-1.955,3.652c-0.033,0.061-0.076,0.117-0.134,0.206 c-0.245-0.215-0.473-0.423-0.711-0.621c-1.338-1.114-2.816-1.888-4.613-1.876c-1.188,0.008-1.994,0.623-2.271,1.731 c-0.298,1.195,0.14,2.253,1.15,2.814c1.119,0.621,2.343,0.969,3.539,1.393c1.719,0.609,3.246,1.507,4.317,3.032 c0.714,1.017,1.004,2.188,1.126,3.405c0.146,1.458,0.089,2.899-0.369,4.309c-0.916,2.82-3.292,4.638-6.264,4.79 c-2.574,0.132-4.824-0.699-6.782-2.324c-0.731-0.607-1.372-1.322-2.042-2c-0.066-0.067-0.101-0.255-0.056-0.329 c0.81-1.313,1.635-2.618,2.458-3.923C34.832,28.66,34.862,28.646,34.868,28.641z"
        ></path>
        <polygon
          fill="#c0ca33"
          points="14.274,16.462 14.274,11.34 0.009,11.34 0.009,36.896 14.274,36.896 14.274,31.774 5.16,31.774 5.16,26.821 13.226,26.821 13.226,21.698 5.16,21.698 5.16,16.462"
        ></polygon>
        <path
          fill="#c0ca33"
          d="M29.613,11.34H19.34v5.038h5.208v13.005c0.085,2.08-1.047,2.533-1.047,2.533	c-2.377,0.792-4.346-2.343-4.346-2.343l-2.39,4.211c3.566,3.934,7.443,3.311,7.443,3.311c5.377-0.113,5.377-7.712,5.377-7.712	L29.613,11.34z"
        ></path>
      </svg>,
    ],
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
          tools={currentPage.tools}
        ></Project>
      }
      <menu className="flex justify-center gap-4">
        <button
          className="bg-gray-200 rounded-2xl p-2 hover:bg-gray-400 space-grotesk-p p-2 md:text-2xl text-start"
          onClick={() => {
            if (Number(currentPage.id) - 1 >= 0) {
              setCurrentPage(projectItems[Number(currentPage.id) - 1]);
            } else {
              setCurrentPage(projectItems[projectItems.length - 1]);
            }
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
            } else {
              setCurrentPage(projectItems[0]);
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
