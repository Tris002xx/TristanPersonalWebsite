import Project from "./Project";
const item = {
  id: "0",
  title: "OpenBID",
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
};
const Experience = () => {
  return (
    <div className="animate-fade-up grid grid-cols-2 gap-10 animate-fade-up max-w-7xl m-auto p-4 text-start ">
      <Project
        key={item.id}
        id={item.id}
        title={item.title}
        descriptions={item.descriptions}
        references={item.references}
        tools={item.tools}
      ></Project>
    </div>
  );
};

export default Experience;
